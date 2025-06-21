import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-topbar',
  imports: [ButtonModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss'
})
export class TopBar {

  sectionName: string = "";

  constructor(){
    this.sectionName = localStorage.getItem("sectionName") || "Tableau de bord"
  }

  changeSectionName(newname: string){
    this.sectionName = newname
  }
}
