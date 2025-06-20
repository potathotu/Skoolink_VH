import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [ButtonModule,TopbarComponent, NavbarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
