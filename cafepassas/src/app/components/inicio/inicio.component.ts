import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  images = ['assets/images/carousel1.jpg',
  'assets/images/carousel2.jpg',
  'assets/images/carousel3.jpg',
  'assets/images/carousel4.jpg',
  'assets/images/carousel5.jpg'
  ]

  ngOnInit(): void {
  }

}
