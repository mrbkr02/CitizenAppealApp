import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-complete-profile',
  standalone: true,
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.css'],
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class CompleteProfileComponent {
  personalInfoForm: FormGroup;
  addressInfoForm: FormGroup;
  documentsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personalInfoForm = this.fb.group({
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });

    this.addressInfoForm = this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{5,6}$')]]
    });

    this.documentsForm = this.fb.group({
      idProof: ['', Validators.required],
      addressProof: ['', Validators.required]
    });
  }

  submitProfile() {
    if (
      this.personalInfoForm.valid &&
      this.addressInfoForm.valid &&
      this.documentsForm.valid
    ) {
      console.log('Profile Data:', {
        personalInfo: this.personalInfoForm.value,
        addressInfo: this.addressInfoForm.value,
        documents: this.documentsForm.value
      });
      alert('Profile Completed Successfully!');
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
