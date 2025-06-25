import { Component } from '@angular/core';
import { PageService } from 'app/shared/service/page/page.service';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';

@Component({
  selector: 'app-messagerie',
  imports: [IconField, InputIcon],
  templateUrl: './messagerie.html',
  styleUrl: './messagerie.scss'
})
export class Messagerie {
  constructor(private _pageService: PageService){
    _pageService.title = "Messagerie"
  }
}
