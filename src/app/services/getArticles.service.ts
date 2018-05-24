import { HttpClient, HttpParams, HttpErrorResponse, HttpRequest, HttpHeaders, HttpEventType, HttpEvent } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';


import { ConfigService } from './config.service';


@Injectable()
export class GetArticlesService {
serverUrl = this.configService.serverURL;
image;
url;
article = [];

  constructor(private http: HttpClient,
              private configService: ConfigService) { }

getPicture(id, i) {
    // tslint:disable-next-line:max-line-length
    const req = new HttpRequest('GET', `${this.serverUrl}articles/getPictures/${id}`, {responseType: 'blob' as 'json'});
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
      response.obj.map((article, index) => {
        this.article.push(article);
        this.getPicture(article.img._id, index).subscribe((event: HttpEvent<any>) => {
          this.article[index].url = this.image.url;
            console.log(this.article);
          });
      });
      console.log(response);
      return response.obj;
    });
  }

}
