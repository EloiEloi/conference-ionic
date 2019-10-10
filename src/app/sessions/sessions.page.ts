import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { Session } from '../model/session';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: 'sessions.page.html',
  styleUrls: ['sessions.page.scss']
})
export class SessionsPage implements OnInit {


  constructor(private appService: AppService, private router: Router) { }

  urlBase = this.appService.urlGlobal;

  listeSessions: Session[] = [];

  afficherDetail(id: number) {
    this.router.navigate(['sessions-detail', id]);
  }

  recupererSesssions() {
    this.appService.recupererSessions().subscribe((liste) => this.listeSessions = liste, (error) => console.log(error));
  }

  ngOnInit() {
    this.recupererSesssions();
  }

  // //add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
