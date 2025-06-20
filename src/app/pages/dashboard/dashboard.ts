import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashBoard {
  constructor(){
    console.log(sessionStorage.getItem("userToken"))
  }

}
