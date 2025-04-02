import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-track-application',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './track-application.component.html',
  styleUrls: ['./track-application.component.css']
})
export class TrackApplicationComponent {
  currentStep = 3; //isko backend se baad me change karenge dynamically

  steps = [
    { status: 'Application Submitted', summary: 'Your application has been successfully submitted and is awaiting review.' },
    { status: 'Under Review', summary: 'Your application is currently being reviewed by the concerned authorities.' },
    { status: 'Approved / Rejected', summary: 'You will receive an update soon regarding the approval or rejection of your application.' },
    { status: 'Completed', summary: 'The application process has been completed. You can download your confirmation.' }
  ];
}
