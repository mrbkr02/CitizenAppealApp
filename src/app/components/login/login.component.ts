import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatInputModule,
    MatFormFieldModule, MatButtonModule, MatCardModule, MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  passwordVisible = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  handleLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.loginService.login(email, password).subscribe({
        next: (response) => {
          if (response && response.message === "Login successful.") {
            const userId = response.user_id;
            localStorage.setItem('userId', userId.toString());
            this.router.navigate(['/actor-dashboard'], { queryParams: { userId } });
          }
        },
        error: (error) => {
          alert('Error: ' + error.message);
        }
      });
    }
  }
  
  

  goToRegister() {
    this.router.navigate(['/register']);
  }
}