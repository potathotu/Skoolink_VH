import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-new-password',
  imports: [InputTextModule, ButtonModule, RadioButtonModule],
  templateUrl: './new-password.html',
  styleUrl: './new-password.scss'
})
export class NewPassword {

}
