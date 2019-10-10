import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'src/app/model/session';
import { AppService } from 'src/app/service/app.service';
import { Presentateur } from 'src/app/model/presentateur';


@Component({
  selector: 'app-sessions-detail',
  templateUrl: './sessions-detail.page.html',
  styleUrls: ['./sessions-detail.page.scss'],
})
export class SessionsDetailPage implements OnInit {

  session: Session;
  presentateurs: Presentateur[] = [];
  urlImageBase = this.appService.urlImageBase;

  constructor(private activatedRoute: ActivatedRoute, private appService: AppService, private router: Router) { }

  afficherDetailPresentateur(id: string) {
    this.router.navigate(['presentateurs-detail', id]);
  }


  recupererSessionEtPresentateurs(id: string) {
    this.session = this.appService.recupererSessionById(id);
    this.session.speakers.forEach(element => {
      let pres: Presentateur;
      const idElement = element.toString()
      pres = this.appService.recupererPresentateurById(idElement);
      console.log('id :', id);
      console.log('pres :', pres);
      console.log('element :', idElement);
      this.presentateurs.push(pres);
    });

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.recupererSessionEtPresentateurs(params.get('id'));
    });
  }

}
