import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private router = inject(Router);
  private fb = inject(FormBuilder);

  registerForm: FormGroup;
  hidePassword: boolean = true;
  

  constructor() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      age: [{ value: '', disabled: true }],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Exactly 10 digits
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/), // At least 1 letter, 1 digit, 1 special char
        ],
      ],
    });
  }

  handleRegister() {
    if (this.registerForm.valid) {
      console.log('Registration Data:', this.registerForm.value);
      // Backend integration yahan
    } else {
      console.log('Form is invalid');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  calculateAge() {
    const dob = new Date(this.registerForm.get('dob')?.value);
    if (!isNaN(dob.getTime())) {
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      this.registerForm.get('age')?.setValue(age);
    }
  }
}
