import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly http: HttpClient) { }

  public authors: any[] = [];

  ngOnInit() {
    this.http.get<any[]>('/products').subscribe((res) => {
      this.authors = res;
    });
  }

}
