import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './home/main/main.component';
import { RegisterComponent } from './home/register/register.component';
import { MotivationComponent } from './motivation/motivation.component';
import { ProgrammeHomeComponent } from './programme/programme-home/programmeHome.component';
import { ProgrammeComponent } from './programme/programme.component';
import { ArticleComponent } from './programme/programme-home/article/article.component';
import { GestionDesEmotionsComponent } from './programme/programme-home/gestion-des-emotions/gestionDesEmotions.component';
import { ActivitePhysiqueComponent } from './programme/programme-home/activite-physique/activitePhysique.component';
import { AboutUsComponent } from './about-us/aboutUs.component';

import { AuthService } from './services/auth.service';
import { ConfigService } from './services/config.service';
import { GetArticlesService } from './services/getArticles.service';
import { GetBiosService } from './services/getBios.service';


import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { NutritionComponent } from './programme/programme-home/nutrition/nutrition.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'motivations', component: MotivationComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'programme', component: ProgrammeComponent, children: [
    { path: '', component: ProgrammeHomeComponent},
    { path: 'nutrition', component: NutritionComponent},
    { path: 'activitePhysique', component: ActivitePhysiqueComponent},
    { path: 'gestionDesEmotions', component: GestionDesEmotionsComponent},
    { path: ':programmeType/article/:id/:title/:pilar', component: ArticleComponent}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    ProgrammeComponent,
    ProgrammeHomeComponent,
    ActivitePhysiqueComponent,
    NutritionComponent,
    GestionDesEmotionsComponent,
    MotivationComponent,
    ArticleComponent,
    EscapeHtmlPipe,
    AboutUsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [
    AuthService,
    ConfigService,
    GetArticlesService,
    GetBiosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
