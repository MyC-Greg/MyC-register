import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private meta: Meta, title: Title) {
    title.setTitle('MyCharlotte - Reduction des effets secondaires dus aux traitements du cancer du sein');

    this.meta.addTags([
      // tslint:disable-next-line:max-line-length
      {name: 'description', content: 'Programme basé sur la nutrition, l\'exercice physique et la gestion des émotions pour réduire les effets secondaires dûs aux chimiothérapies, radiothérapies, chirurgies, hormonothérapies et plus largement aux traitement du cancer du sein'},
      {name: 'author', content: 'myCharlotte'},
      {name: 'keywords', content: 'cancer, sein, chimiothérapie, radiothérapie, chirurgie, hormonothérapie'}
    ]);
  }

  title = 'app';
}
