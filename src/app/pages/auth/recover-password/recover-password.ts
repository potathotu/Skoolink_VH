import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-password',
  imports: [InputTextModule, ButtonModule, CommonModule, RouterLink],
  templateUrl: './recover-password.html',
  styleUrl: './recover-password.scss'
})
export class RecoverPassword {

  isFromResetPassword: number = 0;
  confirmButtonRoute = "/dashboard";

  // show or hide back button
  constructor(){
    this.isFromResetPassword = parseInt(localStorage.getItem("isFromResetPassword") || "0")  
    
    if (this.isFromResetPassword == 1){
      this.confirmButtonRoute = "/login"
    }
  }
  
  onConnect(){
    if (this.isFromResetPassword == 0){
      sessionStorage.setItem("userToken", "69420");
      localStorage.setItem("isFirstLogIn", "1");
    } 
  }

}
