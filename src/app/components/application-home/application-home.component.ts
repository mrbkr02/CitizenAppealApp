import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-application-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './application-home.component.html',
  styleUrl: './application-home.component.css'
})
export class ApplicationHomeComponent {

  applicationId: string = '';
  
  constructor(private router: Router) { }

  searchApplication() {
    if (this.applicationId.trim() === '') {
      alert('Please enter an application ID');
      return;
    }

    this.router.navigate(['/application-info', this.applicationId]);

  }
}
