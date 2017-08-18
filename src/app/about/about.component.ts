import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public page: string;

  constructor(private r: ActivatedRoute) {
    r.url.subscribe((s: UrlSegment[]) => {
      this.page = s[0].path;
    });
  }

  ngOnInit() {

  }
}
