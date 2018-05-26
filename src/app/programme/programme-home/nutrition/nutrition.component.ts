import { Component, OnInit } from '@angular/core';
import { HttpEvent } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { GetArticlesService } from '../../../services/getArticles.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']

})

export class NutritionComponent implements OnInit {
  pilar: String = 'nutrition';
  articles;

  constructor(private getArticlesService: GetArticlesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.getArticlesService.nutritionArticles.length);
      if (this.getArticlesService.nutritionArticles.length === 0 ) {
      this.getArticlesService.getArticles(this.pilar).subscribe(articles => {
        this.articles = articles;
        console.log(articles);
      });
    } else {
      this.articles = this.getArticlesService.nutritionArticles;
    }
  }

  onNavigate(id, title) {
    this.router.navigate(['article', id, title, this.pilar], {relativeTo: this.route});
  }

}
