import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';


import { ConfigService } from './services/config.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ReactiveFormsModule,
    HttpClientModule,
    ],
  providers: [
    AuthService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
