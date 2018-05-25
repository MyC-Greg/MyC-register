import { Article } from './../model/article.model';
import { HttpClient, HttpParams, HttpErrorResponse, HttpRequest, HttpHeaders, HttpEventType, HttpEvent } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';


import { ConfigService } from './config.service';


@Injectable()
export class GetArticlesService {
serverUrl = this.configService.serverURL;
image;
APArticles: Article[] = [];
GDEArticles: Article[] = [];
nutritionArticles: Article[] = [];
article: Article;

  constructor(private http: HttpClient,
              private configService: ConfigService) { }

getPictures(id, i) {
    // tslint:disable-next-line:max-line-length
    const req = new HttpRequest('GET', `${this.serverUrl}articles/getPictures/${id}`, {responseType: 'blob' as 'json'});
    return this.http.request(req)
    .map((response) => {
      this.image = response;
      return response;
    });
  }

  getArticles(pilar) {
      console.log(this.serverUrl);
    return this.http.get<any>(`${this.serverUrl}articles/getArticles/${pilar}`)
    .map((response) => {
      if (pilar === 'AP') {
        response.obj.map((article, index) => {
          this.APArticles.push(article);
          this.getPictures(article.img._id, index).subscribe((event: HttpEvent<any>) => {
            this.APArticles[index].url = this.image.url;
              console.log(this.APArticles);
            });
        });
      } else if (pilar === 'GDE') {
        response.obj.map((article, index) => {
          this.GDEArticles.push(article);
          this.getPictures(article.img._id, index).subscribe((event: HttpEvent<any>) => {
            this.GDEArticles[index].url = this.image.url;
              console.log(this.GDEArticles);
            });
        });
      } else if (pilar === 'nutrition') {
        response.obj.map((article, index) => {
          this.nutritionArticles.push(article);
          this.getPictures(article.img._id, index).subscribe((event: HttpEvent<any>) => {
            this.nutritionArticles[index].url = this.image.url;
              console.log(this.nutritionArticles);
            });
        });
      }
      return response.obj;
    });
  }

  getPicture(id) {
    // tslint:disable-next-line:max-line-length
    const req = new HttpRequest('GET', `${this.serverUrl}articles/getPictures/${id}`, {responseType: 'blob' as 'json'});
    return this.http.request(req)
    .map((response) => {
      this.image = response;
      return response;
    });
  }

  getArticle(id) {
    return this.http.get<any>(`${this.serverUrl}articles/getArticle/${id}`)
    .map((response) => {
        this.article = response.obj;
        this.getPicture(response.obj.img._id).subscribe((event: HttpEvent<any>) => {
        this.article.url = this.image.url;
          console.log(this.article);
        });
        return this.article;
      });

}

}
