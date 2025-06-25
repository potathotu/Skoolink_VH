import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TopBar } from './topbar/topbar';
import { Navbar } from './navbar/navbar';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-layout',
  imports: [ButtonModule, TopBar, Navbar, IonApp, IonRouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
