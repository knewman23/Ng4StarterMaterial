import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.scss']
})


export class HttpExampleComponent implements OnInit {

    data: object;
    loading: boolean;


  constructor(public http: Http) { }

  ngOnInit() {

  }


  makeRequest(): void {
      this.loading = true;
      this.http.request('http://jsonplaceholder.typicode.com/posts/1')
          .subscribe((res: Response) => {
            this.data = res.json();
            this.loading = false;
          });
  }
}

