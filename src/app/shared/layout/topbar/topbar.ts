import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PageService } from '../../service/page/page.service';

@Component({
  selector: 'app-topbar',
  imports: [ButtonModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss'
})
export class TopBar {
  
  constructor(public pageService: PageService){
    
  }
}
