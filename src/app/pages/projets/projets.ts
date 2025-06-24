import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageService } from 'app/shared/service/page/page.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-projets',
  imports: [ButtonModule, CommonModule],
  templateUrl: './projets.html',
  styleUrl: './projets.scss'
})
export class Projets { 
  
  thematique: any = [
    {
      thematique: 1,
      title: "Introduction à Angular",
      projets:[
        {
          number: 5,
          img: "assets/meteo.png",
          name: "Application de météo",
          startAt: "10 juin",
          endAt: "26 juin",
          status: "",
        },

        {
          number: 4,
          img: "assets/rps.png",
          name: "Pierre-Papier-Ciseaux",
          startAt: "22 mai",
          endAt: "10 juin",
          status: "",
        }
      ]
    },

    {
      thematique: 2,
      title: "Introduction à ClickUp",
      projets:[
        {
          number: 3,
          img: "assets/backlog.png",
          name: "Mettre en place un BackLog",
          startAt: "17 avril",
          endAt: "21 mai",
          status: "",
        }
      ]
    }

  
  ];

  constructor(private _pageService: PageService){
    _pageService.title = "Projets"
  }
  
}
