import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public name = 'Toan';
  public age = 20;
  public traiCay = [
    {
      name: 'cam',
      price: 2000,
      discount: true
    },
    {
      name: 'chuoi',
      price: 2500,
      discount: true
    },
    {
      name: 'nho',
      price: 0,
      discount: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log('trai cay ', this.traiCay);
  }
  public reset(): void {
    this.name = '';
    console.log('click next');
  }

}
