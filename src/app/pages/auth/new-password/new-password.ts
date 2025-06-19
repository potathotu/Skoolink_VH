import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-password',
  imports: [InputTextModule, ButtonModule, CommonModule, RouterLink],
  templateUrl: './new-password.html',
  styleUrl: './new-password.scss'
})
export class NewPassword {

  isFromResetPassword: number = 0;

  constructor(){
    this.isFromResetPassword = parseInt(localStorage.getItem("isFromResetPassword") || "0")  
  }

  stopFirstLogIn(){
    localStorage.setItem("isFirstLogin", "0");
  }

}
