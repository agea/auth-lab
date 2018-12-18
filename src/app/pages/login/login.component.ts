import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(private readonly router: Router) {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  login() {
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
