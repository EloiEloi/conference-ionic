import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Presentateur } from 'src/app/model/presentateur';

@Component({
  selector: 'app-presentateurs-detail',
  templateUrl: './presentateurs-detail.page.html',
  styleUrls: ['./presentateurs-detail.page.scss'],
})
export class PresentateursDetailPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) { }

  presentateur: Presentateur;
  urlImagesBase = this.appService.urlImageBase;

  recuperePresentateur(id: string) {
    this.presentateur = this.appService.recupererPresentateurById(id);
    console.log(this.presentateur);
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.recuperePresentateur(params.get('id'));
    });
  }

}
