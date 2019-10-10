import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/model/session';
import { AppService } from 'src/app/service/app.service';


@Component({
  selector: 'app-sessions-detail',
  templateUrl: './sessions-detail.page.html',
  styleUrls: ['./sessions-detail.page.scss'],
})
export class SessionsDetailPage implements OnInit {

  session: Session;

  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) { }

  recupererSession(id: string) {
    this.session = this.appService.recupererSessionById(id);

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.recupererSession(params.get('id'));
    });
  }

}
