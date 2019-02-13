import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { DataProtectionComponent } from './CGU/DataProtection/dataProtection.component';

import { CGUComponent } from './CGU/CGU.component';

import { ConfigService } from './services/config.service';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'CGU', component: CGUComponent},
    {path: 'CGU/dataProtection', component: DataProtectionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    FooterComponent,
    MainComponent,
    CGUComponent,
    DataProtectionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [
    AuthService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
