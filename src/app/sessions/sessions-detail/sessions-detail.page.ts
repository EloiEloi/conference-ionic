import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  presentateurs: Presentateur[];

  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) { }

  recupererSessionEtPresentateurs(id: string) {
    this.session = this.appService.recupererSessionById(id);
    this.session.speakers.forEach(element => {
      let pres: Presentateur;
      pres = this.appService.recupererPresentateurById(element.toString());
      console.log('pres :', pres);
      console.log('element :', element);
      this.presentateurs.push(pres);
    });
    console.log(this.presentateurs);

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.recupererSessionEtPresentateurs(params.get('id'));
    });
  }

}
