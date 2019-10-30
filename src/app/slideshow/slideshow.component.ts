import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  constructor() { }

  photoURL: string = '../../assets/mariachi1.webp'

  photos: string[] = ['mariachi1.webp', 'mariachi2.png', 'mariachi3.jpg'];

  ngOnInit() {
    
    
    this.photos = this.photos.map(url => {
      return '../../assets/' + url;
    });
    console.log(this.photos);
  }

}
