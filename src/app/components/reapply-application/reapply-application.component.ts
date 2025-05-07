import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-reapply-application',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, 
            MatSelectModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatSnackBarModule],
  templateUrl: './reapply-application.component.html',
  styleUrl: './reapply-application.component.css',
})
export class ReapplyApplicationComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  private snackBar = inject(MatSnackBar);

  applicationId: string = '';
  applicationDetails: any = {};
  comment: string = '';
  selectedReason: string = '';
  reasons: any[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.applicationId = params['id'];
      this.fetchApplicationDetails();
      this.fetchReasonList();
    });
  }

  fetchApplicationDetails() {
    this.http.get<any>(`http://localhost:5169/api/applicationforms/${this.applicationId}`)
      .subscribe(data => {
        this.applicationDetails = data;
      });
  }

  fetchReasonList() {
    this.http.get<any[]>(`http://localhost:5169/api/reasonmaster`)
      .subscribe(data => {
        this.reasons = data;
      });
  }

  submitReapply() {
    const payload = {
      applicationId: this.applicationDetails.applicationId,
      serviceName: this.applicationDetails.serviceName,
      citizenId: this.applicationDetails.citizenId,
      currentStatus: this.applicationDetails.currentStatus,
      remarks: this.comment,
      reasonText: this.selectedReason
    };
  
    this.http.post<{ appealId: string }>('http://localhost:5169/api/reapply/submit-reapply', payload)
    .subscribe(
      response => {
        this.snackBar.open(`Applied Successfully, Your appeal ID is ${response.appealId}`, 'Close', {
          duration: 10000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      },
      error => {
        this.snackBar.open('Error submitting reapplication.', 'Close', {
          duration: 10000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        console.error("Error during reapply submission:", error);
      }
    );
  }
  
}