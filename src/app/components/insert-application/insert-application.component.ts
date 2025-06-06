import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-insert-application',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './insert-application.component.html',
  styleUrl: './insert-application.component.css',
})
export class InsertApplicationComponent {
  http = inject(HttpClient);
  apiUrl = 'http://localhost:5169/api/applicationforms';


  formData = {
    applicationId: null,
    citizenId: null,
    serviceName: '',
    serviceId: null,
    maxDeliveryDuration: null,
    currentStatus: '',
    createdOn: new Date().toISOString().slice(0, 16),
    stageId: null,
    completionTime: new Date().toISOString().slice(0, 16),
  };

  handleSubmit() {
    console.log('Submitting form data...');
    console.log('Form data:', this.formData);

    this.http.post(this.apiUrl, this.formData).subscribe({
      next: (response) => {
        console.log('Application submitted successfully:', response);
        alert('Application submitted successfully!');
      },
      error: (error) => {
        console.error('Error submitting application:', error);
        alert('Error submitting application. Please try again.');
      }
    });
  }
}
