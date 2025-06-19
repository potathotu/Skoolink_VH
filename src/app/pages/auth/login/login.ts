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
  getIsFirstLogIn: number = 0;
  isFirstLogIn = false;

  constructor(){
    localStorage.setItem("isFromResetPassword", "0");

    this.getIsFirstLogIn = parseInt(localStorage.getItem("isFirstLogIn") || "1");

    if (this.getIsFirstLogIn == 1){
      this.connectButtonRoute = "/new-password";
      localStorage.setItem("isFirstLogIn","1");
    } else {
      this.connectButtonRoute = "/login";
    }
  }

}
