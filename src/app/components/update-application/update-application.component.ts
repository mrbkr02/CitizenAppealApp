import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-update-application',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-application.component.html',
  styleUrl: './update-application.component.css',
})
export class UpdateApplicationComponent {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  private router = inject(Router);
  
  applicationId: string = '';
  formData: any = {
    citizenId: null,
    serviceName: '',
    serviceId: null,
    maxDeliveryDuration: null,
    currentStatus: '',
    createdOn: '',
    stageId: null,
    completionTime: '',
  };

  constructor() {
    this.route.params.subscribe(params => {
      this.applicationId = params['id'];
      this.fetchApplicationDetails();
    });
  }

  async fetchApplicationDetails() {
    try {
      this.formData = await firstValueFrom(
        this.http.get<boolean>(`http://localhost:5169/api/applicationforms/exists/${this.applicationId}`)
      );
    } catch (error) {
      console.error('Error fetching application:', error);
      alert('Error fetching application details.');
    }
  }

  async handleUpdate() {
    try {
      await firstValueFrom(
        this.http.put(`http://localhost:5169/api/applicationforms/${this.applicationId}`, this.formData)
      );
      alert('Your form has been updated successfully.');
      this.router.navigate(['/']); // Redirect to homepage
    } catch (error) {
      console.error('Error updating application:', error);
      alert('Error updating application.');
    }
  }
}
