import { Bio } from './../model/bio.model';
import { HttpClient, HttpParams, HttpErrorResponse, HttpRequest, HttpHeaders, HttpEventType, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { ConfigService } from './config.service';

@Injectable()
export class GetBiosService {
serverUrl = this.configService.serverURL;
image;
bios: Bio[] = [];

  constructor(private http: HttpClient,
              private configService: ConfigService) { }

getPictures(id, i) {
    // tslint:disable-next-line:max-line-length
    const req = new HttpRequest('GET', `${this.serverUrl}bios/getPictures/${id}`, {responseType: 'blob' as 'json'});
    return this.http.request(req)
    .map((response) => {
      this.image = response;
      return response;
    });
  }

  getBios() {
      console.log(this.serverUrl);
    return this.http.get<any>(`${this.serverUrl}bios/getBios`)
    .map((response) => {
        response.obj.map((bio, index) => {
          this.bios.push(bio);
          this.getPictures(bio.img._id, index).subscribe((event: HttpEvent<any>) => {
            this.bios[index].url = this.image.url;
              console.log(this.bios);
            });
        });
      return response.obj;
    });
  }

}
