import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-otp-verification',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {
  mobileNumber: string = '';
  selectedCountryCode: string = '+91';
  countryCodes: string[] = ['+1', '+91', '+44', '+61', '+49'];
  otp: string[] = ['', '', '', '', '', ''];
  otpSent = false;

  sendOtp() {
    if (this.mobileNumber.length >= 10) {
      this.otpSent = true;
    } else {
      alert("Please enter a valid mobile number.");
    }
  }

  resendOtp() {
    this.otp = ['', '', '', '', '', ''];
    alert("OTP has been resent.");
  }

  verifyOtp() {
    if (this.otp.join('').length === 6) {
      alert("OTP Verified!");
    } else {
      alert("Please enter a 6-digit OTP.");
    }
  }

  focusNext(event: any, index: number) {
    if (event.target.value && index < 6) {
      const nextInput = event.target.parentElement.querySelectorAll('input')[index];
      if (nextInput) nextInput.focus();
    }
  }
}
