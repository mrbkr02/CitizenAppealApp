import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-search-application',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-application.component.html',
  styleUrl: './search-application.component.css',
})
export class SearchApplicationComponent {
  private http = inject(HttpClient);
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

      this.searchResult = exists
        ? `✅ Application with ID ${this.applicationId} exists.`
        : `❌ Application with ID ${this.applicationId} not found.`;

    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 404) {
          this.searchResult = `❌ Application with ID ${this.applicationId} not found.`;
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
