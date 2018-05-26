import { Component, OnInit } from '@angular/core';
import { Bio } from '../model/bio.model';
import { GetBiosService } from '../services/getBios.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutUs.component.html',
  styleUrls: ['./aboutUs.component.scss']

})

export class AboutUsComponent implements OnInit {
bios: Bio[];
content = [];

  constructor(public getBiosService: GetBiosService) { }

  ngOnInit() {
    if (this.getBiosService.bios.length === 0 ) {
    this.getBiosService.getBios().subscribe(bios => {
      this.bios = bios;
      bios.map(bio => {
          if (bio.names === 'Léa Dall\'Aglio et Vincent Guerrier') {
            this.content.push(bio.content);
          } else if (bio.names === 'Aliette et Jérôme Balladur') {
            this.content.push(bio.content);
          } else if (bio.names === 'Charlotte Mahr et Grégoire Nedelec') {
            this.content.push(bio.content);
          }
      })
      ;

      console.log(bios);
    });
  } else {
    this.bios = this.getBiosService.bios;
    this.bios.map(bio => {
        if (bio.names === 'Léa Dall\'Aglio et Vincent Guerrier') {
          this.content.push(bio.content);
        } else if (bio.names === 'Aliette et Jérôme Balladur') {
          this.content.push(bio.content);
        } else if (bio.names === 'Charlotte Mahr et Grégoire Nedelec') {
          this.content.push(bio.content);
        }
    });
  }
  }

}
