import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-application-actions',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './application-actions.component.html',
  styleUrl: './application-actions.component.css'
})

export class ApplicationActionsComponent {
  private router = inject(Router);

  navigate(path: string) {
    this.router.navigate([path]);
  }
}