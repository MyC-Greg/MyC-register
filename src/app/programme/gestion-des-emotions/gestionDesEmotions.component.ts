import { GetArticlesService } from './../../services/getArticles.service';
import { Component, OnInit } from '@angular/core';
import { PublicFeature } from '@angular/core/src/render3';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-gestiondesemotions',
  templateUrl: './gestionDesEmotions.component.html',
  styleUrls: ['./gestionDesEmotions.component.scss']
})
export class GestionDesEmotionsComponent implements OnInit {
articles;
picture;
url;

  constructor(private getArticlesService: GetArticlesService) { }

  ngOnInit() {
    this.getArticlesService.getArticles().subscribe(articles => {
      this.articles = articles;
      console.log(articles);
    });
    this.getArticlesService.getPicture().subscribe((event: HttpEvent<any>) => {
      this.url = this.getArticlesService.image.url;
    });
  }
}
