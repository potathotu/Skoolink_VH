import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
  getIfFirstLogIn: number;

  constructor(private router: Router){

    // redirects to dashboard if already logged in
    if (!(sessionStorage.getItem("userToken") == null)){
      this.router.navigate(["/dashboard"])
    }

    // reset count for reset password back button
    localStorage.setItem("isFromResetPassword", "0");
    this.getIfFirstLogIn = parseInt(localStorage.getItem("isFirstLogIn") || "0");
  
    // check if it's the user's first time logging in and enables the new password interface if it is
    if (this.getIfFirstLogIn == 0){
      this.connectButtonRoute = "/recover-password";
    } else{
      this.connectButtonRoute = "/dashboard";
    }    
  }

  // saves user token if it isn't their first time logging in
  onConnect(){
    if (this.getIfFirstLogIn == 1){
    sessionStorage.setItem("userToken", "69420");
    }
  } 

}
