import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  isShow: boolean;
  isAlert: boolean;
  isSpinner: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    ]),
      country: new FormControl(null),
      city: new FormControl(null)
    });
  }

  closeModal() {
    this.isShow = false;
  }

  closeAlert() {
    this.isAlert = false;
  }

  closeSpinner() {
    this.isSpinner = false;
  }

  openSpinner() {
    this.isSpinner = true;
  }

  onSubmit() {
    setTimeout(() => {
      if (!this.isAlert) {
        this.openSpinner();
      }
    }, 80);
    console.log(this.myForm.value.email);
    this.authService.checkEmail(this.myForm.value.email)
      .subscribe(
        bool => {
        if (bool) {
          const user = new User(
                this.myForm.value.firstName,
                this.myForm.value.lastName,
                this.myForm.value.email,
                this.myForm.value.country,
                this.myForm.value.city
            );
            console.log(user);
            this.authService.signup(user)
                .subscribe(
                    data => {
                      this.closeSpinner();
                      this.isShow = true;
                      this.closeSpinner();
                    },
                    error => console.error(error)
                );
            this.myForm.reset();
        } else {
          this.closeSpinner(),
          this.isAlert = true;
          setTimeout(() => {
            this.isAlert = false;
          }, 2500);
        }
        },
        error => console.error(error)
      );

    // rajouter un toast pour dire 'vous etes bien enregistré, un email vous a ete envoyé'
      }
}
