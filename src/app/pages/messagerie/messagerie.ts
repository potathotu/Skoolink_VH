import { Component } from '@angular/core';
import { PageService } from 'app/shared/service/page/page.service';

@Component({
  selector: 'app-messagerie',
  imports: [],
  templateUrl: './messagerie.html',
  styleUrl: './messagerie.scss'
})
export class Messagerie {
  constructor(private _pageService: PageService){
    _pageService.title = "Messagerie"
  }
}
