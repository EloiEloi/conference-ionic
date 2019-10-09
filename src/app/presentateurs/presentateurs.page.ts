import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { Presentateur } from '../model/presentateur';

@Component({
  selector: 'app-presentateurs',
  templateUrl: './presentateurs.page.html',
  styleUrls: ['./presentateurs.page.scss'],
})
export class PresentateursPage implements OnInit {

  constructor(private appService: AppService) { }

  urlBase = this.appService.urlGlobal;

  listePresentateurs: Presentateur[] = [];

  recupererPresentateurs() {
    this.appService.recupererPresentateurs().subscribe((liste) => this.listePresentateurs = liste, (error) => console.log(error));
  }
  // recupererPresentateurs() {
  //   this.appService.recupererPresentateurs().subscribe((liste) => console.log(liste), (error) => console.log(error));
  // }

  ngOnInit() {
    this.recupererPresentateurs();
  }

}
