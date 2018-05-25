import { GetArticlesService } from './../../services/getArticles.service';
import { Component, OnInit } from '@angular/core';
import { HttpEvent } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestiondesemotions',
  templateUrl: './gestionDesEmotions.component.html',
  styleUrls: ['./gestionDesEmotions.component.scss']
})
export class GestionDesEmotionsComponent implements OnInit {
  pilar: String = 'GDE';
  articles;

  constructor(private getArticlesService: GetArticlesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.getArticlesService.GDEArticles.length);
      if (this.getArticlesService.GDEArticles === undefined || this.getArticlesService.GDEArticles.length === 0 ) {
      this.getArticlesService.getArticles(this.pilar).subscribe(articles => {
        this.articles = articles;
        console.log(articles);
      });
    } else {
      this.articles = this.getArticlesService.GDEArticles;
    }
  }

  onNavigate(id, title, pilar) {
    this.router.navigate(['article', id, title, pilar], {relativeTo: this.route});
  }

}
