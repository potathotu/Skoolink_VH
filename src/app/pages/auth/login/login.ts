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
  getIfIsFirstLogIn: number = 0;

  constructor(){
    this.getIfIsFirstLogIn = parseInt(localStorage.getItem("isFirstLogIn") || "0");

    if (this.getIfIsFirstLogIn == 0){
      this.connectButtonRoute = "/new-password"
    }

    console.log(this.getIfIsFirstLogIn)
  }
}
