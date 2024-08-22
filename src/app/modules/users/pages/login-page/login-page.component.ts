import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterModule, 
    // LoginComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
