import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poncho',
  templateUrl: './poncho.component.html',
  styleUrls: ['./poncho.component.scss']
})
export class PonchoComponent implements OnInit {

  numbers: Number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

}
