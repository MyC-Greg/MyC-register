import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';

import { User } from './../model/user.model';

import { ConfigService } from './config.service';


@Injectable()
export class AuthService {
    constructor(private http: HttpClient,
                private configService: ConfigService) {}

serverUrl = this.configService.serverURL;

    checkEmail(email) {
        console.log(email);
        return this.http.get<any>(`${this.serverUrl}usersAuth/checkEmail/${email}`, {observe: 'response'})
        .map((response) => {
            console.log(response.status);
            let bool;
            response.status === 204 ? bool = true : bool = false;
            return bool;
        })
        .catch((error: HttpErrorResponse) => Observable.throw(error));
        }

    signup(user: User) {
        console.log(user);
        return this.http.post<any>(`${this.serverUrl}usersAuth/signup`, {user}, {observe: 'response'})
        .map((response) => {
            console.log('c est du delire');
            console.log(response);
        })
            .catch((error) => {
                    return Observable.throw(error);
            });
    }
}
