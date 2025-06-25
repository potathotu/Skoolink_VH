import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TopBar } from './topbar/topbar';
import { Navbar } from './navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [ButtonModule, TopBar, Navbar, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
