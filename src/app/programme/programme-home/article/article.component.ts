import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { HttpEvent } from '@angular/common/http';
import { GetArticlesService } from './../../../services/getArticles.service';
import { Article } from './../../../model/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

article: Article;
articles: Article[];
content;

  constructor(private getArticlesService: GetArticlesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let art = [];
    const _id = this.route.snapshot.params['id'];
    const title = this.route.snapshot.params['title'];
    const pilar = this.route.snapshot.params['pilar'];

    console.log(pilar);
    console.log(title);

    if (pilar === 'AP') {
      if (this.getArticlesService.APArticles.length === 0 ) {
        console.log('IF BLOCK');
        this.getArticlesService.getArticle(_id).subscribe(article => {
          console.log(article);
          this.article = article;
          this.content = this.article.content;
        });
        } else {
          console.log('ELSE BLOCK');
          art = this.getArticlesService.APArticles.filter(article => {
            return  article._id === _id;
        });
        this.article = art[0];
        this.content = this.article.content;
      }
    } else if (pilar === 'GDE') {
      if (this.getArticlesService.GDEArticles.length === 0 ) {
        console.log('IF BLOCK');
        this.getArticlesService.getArticle(_id).subscribe(article => {
          console.log(article);
          this.article = article;
          this.content = this.article.content;
        });
        } else {
          console.log('ELSE BLOCK');
          art = this.getArticlesService.GDEArticles.filter(article => {
            return  article._id === _id;
        });
        this.article = art[0];
        this.content = this.article.content;
      }
    } else if (pilar === 'nutrition') {
      if (this.getArticlesService.nutritionArticles.length === 0 ) {
        console.log('IF BLOCK');
        this.getArticlesService.getArticle(_id).subscribe(article => {
          console.log(article);
          this.article = article;
          this.content = this.article.content;
        });
        } else {
          console.log('ELSE BLOCK');
          art = this.getArticlesService.nutritionArticles.filter(article => {
            return  article._id === _id;
        });
        this.article = art[0];
        this.content = this.article.content;
      }
    }
  }

}
