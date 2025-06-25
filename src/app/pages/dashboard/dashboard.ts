import { Component } from '@angular/core';
import { PageService } from 'src/app/shared/service/page/page.service';


@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashBoard {

  constructor(private _pageService: PageService){
    this._pageService.title = "DashBoard"
  }
}