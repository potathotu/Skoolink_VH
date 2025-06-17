import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  imports: [InputTextModule, ButtonModule, RadioButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

}
