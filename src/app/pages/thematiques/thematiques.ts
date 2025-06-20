import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-thematiques',
  imports: [ButtonModule, NgFor],
  templateUrl: './thematiques.html',
  styleUrl: './thematiques.scss'
})
export class Thematiques {
  
  thematiques = [
    {
      id: 1,
      title: "Introduction à Angular",
      img: "angular-logo.png",
      startAt: "22 mai",
      endAt: "26 juin",
      status: "ongoin"
    },

    {
      id: 2,
      title: "Introduction à ClickUp",
      img: "angular-logo.png",
      startAt: "22 mai",
      endAt: "26 juin",
      status: "ongoin"
    },    

    {
      id: 3,
      title: "Figma : Prototype",
      img: "angular-logo.png",
      startAt: "22 mai",
      endAt: "26 juin",
      status: "ongoin"
    },

    {
      id: 4,
      title: "Figma : Wireframe",
      img: "angular-logo.png",
      startAt: "22 mai",
      endAt: "26 juin",
      status: "ongoin"
    }
  ];

  constructor(){
    localStorage.setItem("sectionName","Thématiques");
  }

  
}
