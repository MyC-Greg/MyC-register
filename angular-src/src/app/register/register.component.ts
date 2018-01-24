import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Rx';

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

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
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

  onSubmit() {
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
                    data => this.isShow = true,
                    error => console.error(error)
                );
            this.myForm.reset();
        } else {
          this.isAlert = true;
        }
        },
        error => console.error(error)
      );

    // rajouter un toast pour dire 'vous etes bien enregistré, un email vous a ete envoyé'
      }
}
