import { HttpClient } from '@angular/common/http';
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

  constructor(private readonly router: Router, private readonly http: HttpClient) {
    localStorage.removeItem('token');
  }

  login() {
    this.http.post('/auth/login',
      {
        email: this.username,
        password: this.password
      })
      .subscribe(res => {
        localStorage.setItem('token', JSON.stringify(res));
        this.router.navigate(['/']);
      });
  }

  ngOnInit() {
  }

}
