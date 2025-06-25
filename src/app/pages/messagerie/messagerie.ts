import { Component } from '@angular/core';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { PageService } from 'src/app/shared/service/page/page.service';

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
