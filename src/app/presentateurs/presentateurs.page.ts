import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { Presentateur } from '../model/presentateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentateurs',
  templateUrl: './presentateurs.page.html',
  styleUrls: ['./presentateurs.page.scss'],
})
export class PresentateursPage implements OnInit {

  constructor(private appService: AppService, private router: Router) { }


  listePresentateurs: Presentateur[] = [];
  urlImagesBase = this.appService.urlImageBase;

  afficherDetail(id: number) {
    this.router.navigate(['presentateurs-detail', id]);
  }

  recupererPresentateurs() {
    this.appService.recupererPresentateurs().subscribe((liste) => this.listePresentateurs = liste, (error) => console.log(error));
  }

  ngOnInit() {
    this.recupererPresentateurs();
  }

}
