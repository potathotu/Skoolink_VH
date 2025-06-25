import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [ButtonModule, RouterModule, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

}

