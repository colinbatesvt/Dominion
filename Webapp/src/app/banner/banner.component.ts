import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  imgSrc: string;
  constructor() {
    this.imgSrc = '/assets/dominion-banner.jfif';
  }

  ngOnInit() {
  }

}
