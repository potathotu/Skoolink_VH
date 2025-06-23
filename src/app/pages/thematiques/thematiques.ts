import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';



@Component({
  selector: 'app-thematiques',
  imports: [ButtonModule, CommonModule, BadgeModule,OverlayBadgeModule],
  templateUrl: './thematiques.html',
  styleUrl: './thematiques.scss'
})
export class Thematiques {

  thematiques = [
    {
      id: 1,
      title: "Introduction à Angular",
      img: "assets/angular-logo.png",
      startAt: "22 mai",
      endAt: "26 juin",
      status: "En cours"
    },

    {
      id: 2,
      title: "Introduction à ClickUp",
      img: "assets/clickup-logo.png",
      startAt: "17 avril",
      endAt: "21 mai",
      status: "Terminé"
    },    

    {
      id: 3,
      title: "Introduction à Figma",
      img: "assets/figma-logo.png",
      startAt: "12 mars",
      endAt: "16 avril",
      status: "Terminé"
    },

    {
      id: 4,
      title: "Introduction à GitLab",
      img: "assets/gitlab-logo.png",
      startAt: "00 avril",
      endAt: "00 avril",
      status: "Terminé"
    }
  ];
  
}
