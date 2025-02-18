import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginWS } from '../../services/login.service.ws';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  providers: [LoginWS],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  formGroup: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginWS: LoginWS
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.formGroup = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  submit(): void {
    this.loginWS.login(this.formGroup.value).subscribe((result) => {
      this.router.navigate(['/to-do-list']);
    });
  }
}
