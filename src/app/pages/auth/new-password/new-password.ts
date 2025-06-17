import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-password',
  imports: [InputTextModule, ButtonModule],
  templateUrl: './new-password.html',
  styleUrl: './new-password.scss'
})
export class NewPassword {

}
