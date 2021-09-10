import { Component, NgModule, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})


export class HeroDetailComponent implements OnInit {
  public loginName = 'admin';
  public counter = 0;
  public binhPhuong = 0;

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.binhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;
  }

}
