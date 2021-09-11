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
    const payload = {
      body: "some connent",
      postId: 3
    };
    this.httpService.postComments(payload).subscribe(data => {
      console.log("postComments ", data);
    })

    // this.httpService.getRandomUser(3).subscribe(data => {
    //   console.log("dagetRandomUserta ", data.results);
    // })
  }
}
