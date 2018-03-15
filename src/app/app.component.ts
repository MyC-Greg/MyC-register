import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private meta: Meta, title: Title) {
    title.setTitle('myCharlotte - Cancer du sein: Réduction des effets secondaires dus aux traitements');

    this.meta.addTags([
      // tslint:disable-next-line:max-line-length
      {name: 'description', content: 'myCharlotte vous aide à gérer les effets secondaires des traitements du cancer du sein grâce à l\'alimentation, l\'exercice physique et la gestion des émotions. Vous êtes actrice de votre mieux--être pendant les chimiothérapies, les radiothérapies, la chirurgie et l\'hormonothérapie.'},
      {name: 'author', content: 'myCharlotte'},
      {name: 'keywords', content: 'cancer, sein, chimiothérapie, radiothérapie, chirurgie, hormonothérapie'}
    ]);
  }

  title = 'app';
}
