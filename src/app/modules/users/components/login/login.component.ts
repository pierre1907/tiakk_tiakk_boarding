import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    // MatErrorModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{
  errorEmail = 'Le champs nom utilisateur est obligatoire';
  errorPassword = 'Le champs mot de passe est obligatoire';
  signInForm: any;
  hidePassword: boolean = true;

  @Input() urlNavigation = '';

  private _destroySub$ = new Subject<void>();

  // private readonly notifier: NotifierService;

  role = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private notifier: NotifierService,
    
  ) {
    this.notifier = notifier;
    this.signInForm= this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }
  
  public onSubmit(): void {
    const signInRequest = {
      email: this.email.value,
      password: this.password.value
    }
    console.log(signInRequest);
  }


  get email(){
    return this.signInForm.get('email');
  }

  get password(){
    return this.signInForm.get('password');
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}


