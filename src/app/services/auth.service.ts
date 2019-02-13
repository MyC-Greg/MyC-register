
// tslint:disable-next-line:import-blacklist
import {throwError as observableThrowError} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import {  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from './../model/user.model';

import { ConfigService } from './config.service';


@Injectable()
export class AuthService {
    constructor(private http: HttpClient,
                private configService: ConfigService) {}

serverUrl = this.configService.serverURL;

    checkEmail(email) {
        // console.log(email);
        return this.http.get<any>(`${this.serverUrl}usersAuth/checkEmail/${email}`, {observe: 'response'})
        .pipe(map((response) => {
            // console.log(response.status);
            let bool;
            response.status === 204 ? bool = true : bool = false;
            return bool;
        }), catchError((error: HttpErrorResponse) => observableThrowError(error))
        );
        }

    signup(user: User) {
        // console.log(user);
        return this.http.post<any>(`${this.serverUrl}usersAuth/signup`, {user}, {observe: 'response'})
        // .map((response) => {
        //     console.log(response);
        // })
            .pipe(catchError((error) => {
                return observableThrowError(error);
        }));
    }
}
