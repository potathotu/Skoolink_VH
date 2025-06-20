import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-topbar',
  imports: [ButtonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  sectionName: string = "";

  constructor(){
    this.sectionName = localStorage.getItem("sectionName") || "Tableau de bord"
  }

  changeSectionName(newname: string){
    this.sectionName = newname
  }
}
