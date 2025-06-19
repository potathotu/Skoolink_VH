import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  imports: [RouterLink, InputTextModule, RadioButtonModule, ButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  connectButtonRoute = "";
  getIfFirstLogIn: number = 0;

  constructor(){
    // reset count for reset password back button
    localStorage.setItem("isFromResetPassword", "0");
  
    this.getIfFirstLogIn = parseInt(localStorage.getItem("isFirstLogIn") || "0");
    
    // check if it's the user's first time logging in and enables the new password interface if it is
    if (this.getIfFirstLogIn == 0){
      this.connectButtonRoute = "/recover-password"
    }
  }
}
