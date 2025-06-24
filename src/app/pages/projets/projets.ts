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
  
  projets: any = [
    {
      number: 6,
      img: "assets/meteo.png",
      name: "Application de météo",
      startAt: "10 juin",
      endAt: "26 juin",
      status: "En cours",
      link: "https://angular.dev/",
      thematique: 1
    },

    {
      number: 5,
      img: "assets/rps.png",
      name: "Pierre-Papier-Ciseaux",
      startAt: "22 mai",
      endAt: "10 juin",
      status: "Terminé",
      link: "https://angular.dev/",
      thematique: 1
    },
  
    {
      number: 4,
      img: "assets/backlog.png",
      name: "Mettre en place un BackLog",
      startAt: "17 avril",
      endAt: "21 mai",
      status: "Terminé",
      link: "https://app.clickup.com/6918654/home",
      thematique: 2
    },

    {
      number: 3,
      img: "assets/meteo.png",
      name: "Application de météo",
      startAt: "10 juin",
      endAt: "26 juin",
      status: "Terminé",
      link: "https://angular.dev/",
      thematique: 1
    },

    {
      number: 2,
      img: "assets/rps.png",
      name: "Pierre-Papier-Ciseaux",
      startAt: "22 mai",
      endAt: "10 juin",
      status: "Terminé",
      link: "https://angular.dev/",
      thematique: 1
    },
  
    {
      number: 1,
      img: "assets/backlog.png",
      name: "Mettre en place un BackLog",
      startAt: "17 avril",
      endAt: "21 mai",
      status: "Terminé",
      link: "https://app.clickup.com/6918654/home",
      thematique: 2
    }

  ]
    

  constructor(private _pageService: PageService){
    _pageService.title = "Projets"
  }
  
}
