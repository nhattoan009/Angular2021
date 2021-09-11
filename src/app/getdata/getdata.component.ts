import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../Services/http-service.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.scss']
})
export class GETdataComponent implements OnInit {

  constructor(
    private httpService: HttpServiceService
  ) { }

  public ngOnInit(): void {
    this.httpService.getComments().subscribe(data => {
      console.log("getComments ", data);
    })

    this.httpService.getRandomUser(3).subscribe(data => {
      console.log("dagetRandomUserta ", data.results);
    })
  }
}
