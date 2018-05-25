import { GetArticlesService } from './../../services/getArticles.service';
import { Component, OnInit } from '@angular/core';
import { HttpEvent } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activitephysique',
  templateUrl: './activitePhysique.component.html',
  styleUrls: ['./activitePhysique.component.scss']

})
export class ActivitePhysiqueComponent implements OnInit {
  pilar: String = 'AP';
  articles;

  constructor(private getArticlesService: GetArticlesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.getArticlesService.APArticles.length);
      if (this.getArticlesService.APArticles === undefined || this.getArticlesService.APArticles.length === 0 ) {
      this.getArticlesService.getArticles(this.pilar).subscribe(articles => {
        this.articles = articles;
        console.log(articles);
      });
    } else {
      this.articles = this.getArticlesService.APArticles;
    }
  }

  onNavigate(id, title) {
    this.router.navigate(['article', id, title, this.pilar], {relativeTo: this.route});
  }

}
