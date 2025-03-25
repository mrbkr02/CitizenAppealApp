import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-check-for-update',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule],
  templateUrl: './check-for-update.component.html',
  styleUrl: './check-for-update.component.css',
})
export class CheckForUpdateComponent {
  private router = inject(Router); // Inject Router
  private http = inject(HttpClient); // Inject HttpClient
  applicationId: string = '';

  async checkApplication() {
    if (!this.applicationId.trim()) {
      alert('Please enter a valid Application ID.');
      return;
    }

    try {
      // Call backend API to check if application exists
      const exists = await firstValueFrom(
        this.http.get<boolean>(`http://localhost:5169/api/applicationforms/exists/${this.applicationId}`)
      );

      if (exists) {
        // If API response is true, navigate to update route
        this.router.navigate(['/update', this.applicationId]);
      } else {
        // debugger;
        alert('Application ID is not correct. Please enter again.');
      }
    } catch (error) {
      // console.error('Error checking application:', error);
      // alert('Error checking application. Please try again.');
    }
  }
}
