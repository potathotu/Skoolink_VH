import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  imports: [InputTextModule, RadioButtonModule, ButtonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  getNotFirstLogIn: number;

  constructor(private router: Router){
    // redirects to dashboard if already logged in
    if (sessionStorage.getItem("userToken")){
      this.router.navigate(["/dashboard"])
    }

    // removes reset password back button
    localStorage.setItem("isFromResetPassword", "0");
    this.getNotFirstLogIn = parseInt(localStorage.getItem("isFirstLogIn") || "0");
  }

  // saves user token if it isn't their first time logging in and sends to change password or dashboard
  onConnect(){
    if (this.getNotFirstLogIn == 1){
      sessionStorage.setItem("userToken", "69420");
      this.router.navigate(["/dashboard"])
    } else{
      this.router.navigate(["/recover-password"])
    }
  } 

}
