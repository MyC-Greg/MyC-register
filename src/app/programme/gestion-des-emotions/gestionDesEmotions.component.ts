import { GetArticlesService } from './../../services/getArticles.service';
import { Component, OnInit } from '@angular/core';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-gestiondesemotions',
  templateUrl: './gestionDesEmotions.component.html',
  styleUrls: ['./gestionDesEmotions.component.scss']
})
export class GestionDesEmotionsComponent implements OnInit {
articles;

  constructor(private getArticlesService: GetArticlesService) { }

  ngOnInit() {
    console.log(this.getArticlesService.article.length);
      if (this.getArticlesService.article.length === 0 ) {
      this.getArticlesService.getArticles().subscribe(articles => {
        this.articles = articles;
      });
    } else {
      this.articles = this.getArticlesService.article;
    }
  }

}
