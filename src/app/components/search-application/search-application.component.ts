import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search-application',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './search-application.component.html',
  styleUrl: './search-application.component.css',
})
export class SearchApplicationComponent {
  private http = inject(HttpClient);
  private router = inject(Router);
  
  applicationId: string = '';
  searchResult: string = '';

  async searchApplication() {
    if (!this.applicationId.trim()) {
      this.searchResult = 'Please enter a valid Application ID.';
      return;
    }

    try {
      const exists = await firstValueFrom(
        this.http.get<boolean>(`http://localhost:5169/api/applicationforms/exists/${this.applicationId}`)
      );

      if (exists) {
        this.router.navigate(['/reapply', this.applicationId]);
      } else {
        this.searchResult = `Application with ID ${this.applicationId} not found.`;
      }
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 404) {
          this.searchResult = `Application with ID ${this.applicationId} not found.`;
        } else {
          this.searchResult = `⚠️ Error: ${error.statusText} (Status: ${error.status})`;
        }
      } else {
        this.searchResult = '⚠️ Unexpected error occurred.';
      }

      console.error('Error fetching application:', error);
    }
  }
}
