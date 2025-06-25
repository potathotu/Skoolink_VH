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
      number: 5,
      img: "assets/meteo.png",
      name: "Application de météo",
      startAt: "10 juin",
      endAt: "26 juin",
      status: "Terminé",
      link: "https://angular.dev/",
      thematique: 1,
      thematiqueImage: "assets/angular-logo.png"
    },

    {
      number: 4,
      img: "assets/rps.png",
      name: "Pierre-Papier-Ciseaux",
      startAt: "22 mai",
      endAt: "10 juin",
      status: "Terminé",
      link: "https://angular.dev/",
      thematique: 1,
      thematiqueImage: "assets/angular-logo.png"
    },
  
    {
      number: 3,
      img: "assets/backlog.png",
      name: "Mettre en place un BackLog",
      startAt: "17 avril",
      endAt: "21 mai",
      status: "Terminé",
      link: "https://app.clickup.com/6918654/home",
      thematique: 2,
      thematiqueImage: "assets/clickup-logo.png"
    },

    {
      number: 2,
      img: "assets/chao.png",
      name: "Créer son premier wireframe",
      startAt: "00 avril",
      endAt: "00 mai",
      status: "Terminé",
      link: "https://figma.com",
      thematique: 2,
      thematiqueImage: "assets/figma-logo.png"
    },

    {
      number: 1,
      img: "assets/repository.png",
      name: "Apprendre à utiliser gitlab",
      startAt: "00 avril",
      endAt: "00 mai",
      status: "Terminé",
      link: "https://about.gitlab.com/",
      thematique: 2,
      thematiqueImage: "assets/gitlab-logo.png"
    }
  ]
    
  constructor(private _pageService: PageService){
    _pageService.title = "Projets"
  }
  
}
