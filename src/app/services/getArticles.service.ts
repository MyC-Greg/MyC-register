import { HttpClient, HttpParams, HttpErrorResponse, HttpRequest, HttpHeaders, HttpEventType } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';


import { ConfigService } from './config.service';


@Injectable()
export class GetArticlesService {
serverUrl = this.configService.serverURL;
image;

  constructor(private http: HttpClient,
              private configService: ConfigService) { }

getPicture() {
    // tslint:disable-next-line:max-line-length
    const req = new HttpRequest('GET', `${this.serverUrl}articles/getPictures`, {responseType: 'blob' as 'json'});
    return this.http.request(req)
    .map((response) => {
      this.image = response;
      return response;
    });
  }

  getArticles() {
      console.log(this.serverUrl);
    return this.http.get<any>(`${this.serverUrl}articles/getArticles`)
    .map((response) => {
    console.log(response);
      console.log(response.obj);
      return response.obj;
    });
  }

}
