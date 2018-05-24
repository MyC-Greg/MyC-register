import { GetArticlesService } from './../../services/getArticles.service';
import { Component, OnInit } from '@angular/core';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
article;
content;

  constructor(private getArticlesService: GetArticlesService) { }

// utiliser @viewChild pour loader l'image de l'article sinon ca cree des erreurs

  ngOnInit() {
    console.log(this.getArticlesService.article.length);
      if (this.getArticlesService.article.length === 0 ) {
      this.getArticlesService.getArticles().subscribe(articles => {
        this.article = articles[0];
        this.content = this.article.content;
      });
    } else {
      this.article = this.getArticlesService.article[0];
      this.content = this.article.content;
    }
  }

}
