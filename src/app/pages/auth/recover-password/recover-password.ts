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

  // show or hide back button
  constructor(){
    this.isFromResetPassword = parseInt(localStorage.getItem("isFromResetPassword") || "0")  
  }

  // will stop showing the password interface on log in
  stopFirstLogIn(){
    localStorage.setItem("isFirstLogIn", "1");
  }

}
