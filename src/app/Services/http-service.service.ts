import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private REST_API_SERVER = 'http://localhost:3000';
  private REST_API_SERVER_RANDOMUSER = 'https://randomuser.me/api/?results=';
  private httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getComments(): Observable<any>{
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
  public postComments(payload: any): Observable<any>{
    console.log("post comment: payload", payload);
    
    const url = `${this.REST_API_SERVER}/comments`;
    console.log("post comment: url", url);

    return this.httpClient.post<any>(url, payload, this.httpOptions);
  }

  public getRandomUser(user: number = 1): Observable<any>{
    const url = `${this.REST_API_SERVER_RANDOMUSER}` + user;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
