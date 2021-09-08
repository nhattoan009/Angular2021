import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public name = 'Toan';
  public age = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
