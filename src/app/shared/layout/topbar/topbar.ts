import { Component } from '@angular/core';
import { PageService } from 'app/shared/service/page/page.service';
import { ButtonModule } from 'primeng/button';

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
