import { Component } from '@angular/core';
import { PageService } from 'app/shared/service/page/page.service';

@Component({
  selector: 'app-projets',
  imports: [],
  templateUrl: './projets.html',
  styleUrl: './projets.scss'
})
export class Projets { 
  constructor(private _pageService: PageService){
    _pageService.title = "Projets"
  }
}
