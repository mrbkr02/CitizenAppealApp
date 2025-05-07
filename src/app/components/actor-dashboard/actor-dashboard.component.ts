import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-actor-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './actor-dashboard.component.html',
  styleUrls: ['./actor-dashboard.component.css'],
})
export class ActorDashboardComponent implements OnInit {
  displayedColumns: string[] = ['applicationId', 'citizenId', 'serviceName', 'createdOn', 'departmentId'];
  pendingAppeals: any[] = [];
  pendingAppealsCount: number = 0;
  userId: string = '';

  private http = inject(HttpClient);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.userId = params['userId'];
      if (this.userId) {
        this.getPendingAppeals();
      }
    });
  }

  // Fetch pending appeals from the backend API
  getPendingAppeals(): void {
    const url = `http://localhost:5169/api/ActorDashboard/pending-appeals/${this.userId}`;
    this.http.get<any[]>(url).subscribe({
      next: (response) => {
        console.log(response);
        this.pendingAppeals = response;
        this.pendingAppealsCount = response.length;
      },
      error: (error) => {
        console.error('Error fetching pending appeals:', error);
      },
    });
  }
}
