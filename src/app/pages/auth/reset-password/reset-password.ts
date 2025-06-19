import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputOtpModule } from 'primeng/inputotp';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  imports: [FormsModule, ButtonModule, InputTextModule, InputOtpModule, CommonModule, RouterLink],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss'
})
export class ResetPassword {

  showOtpInterface = false;
  getLocalIsFromResetPassword: number = 0;
    
  // checks if page needs to start from the otp password or mail
  constructor(){
    this.getLocalIsFromResetPassword = parseInt(localStorage.getItem("isFromResetPassword") || "0")
    if (this.getLocalIsFromResetPassword == 1){
      this.showOtpInterface = true
    }
  }

  // go to otp interface
  emailSent(){
    this.showOtpInterface = true;
  }

  // will tell the new password interface that the user came from here
  validOtpPassword(){
    localStorage.setItem("isFromResetPassword", "1");
  }
}




