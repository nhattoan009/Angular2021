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
  public tp: string[] = ['thanh pho'];
  public tinh = [
    {
      tinh: 'tinh thanh'
      
    },
    {
      tinh: 'An Giang',
      tp: [
        'tp Long Xuyen',
        'tp Chau Doc',
        'tp An Phu',
        'tp Chau Thanh',
        'tp Tinh Bien'
      ]
    },
    {
      tinh: 'Kien Giang',
      tp: [
        'tp Ha Tien',
        'tp Rach Gia',
        'tp Phu Quoc'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log('City ', this.tinh);
  }
  public reset(): void {
    this.name = '';
    console.log('click next');
  }

  public changeCity(event: any) {
    const city = event.target.value;
    if (!city) { return; }

    //cach 1
    // console.log('event', city);
    // const search = this.tinh.filter((data) => data.tinh === city);
    // console.log('Search ', search);
    // if (search && search.length > 0) {
    //   this.tp = search[0].tp;
    // }

    //cach 2
    this.tp = this.tinh.find(data => data.tinh === city) ?.tp || [];
  }

}
