import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  public counter = 0;
  public binhPhuong = 0;

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.binhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;
  }
}
