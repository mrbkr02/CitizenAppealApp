import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-application-actions',
  imports: [],
  templateUrl: './application-actions.component.html',
  styleUrl: './application-actions.component.css'
})

export class ApplicationActionsComponent {
  private router = inject(Router);

  navigate(path: string) {
    this.router.navigate([path]);
  }
}