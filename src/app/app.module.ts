import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';

import { AuthService } from './services/auth.service';
import { ConfigService } from './services/config.service';
import { GetArticlesService } from './services/getArticles.service';

import { ProgrammeComponent } from './programme/programme.component';
import { ProgrammeHomeComponent } from './programme/programme-home/programmeHome.component';
import { ActivitePhysiqueComponent } from './programme/activite-physique/activitePhysique.component';
import { NutritionComponent } from './programme/nutrition/nutrition.component';
import { GestionDesEmotionsComponent } from './programme/gestion-des-emotions/gestionDesEmotions.component';
import { MotivationComponent } from './motivation/motivation.component';
import { ArticleComponent } from './programme/article/article.component';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'programme', component: ProgrammeComponent, children: [
    { path: '', component: ProgrammeHomeComponent},
    { path: 'nutrition', component: NutritionComponent},
    { path: 'activitePhysique', component: ActivitePhysiqueComponent},
    { path: 'gestionDesEmotions', component: GestionDesEmotionsComponent},
    { path: 'motivations', component: MotivationComponent},
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
    EscapeHtmlPipe
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
    GetArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
