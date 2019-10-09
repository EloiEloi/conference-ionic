import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { Session } from '../model/session';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {


  constructor(private appService: AppService) { }

  urlBase = this.appService.urlGlobal;

  listeSessions: Session[] = [];

  recupererSesssions() {
    this.appService.recupererSessions().subscribe((liste) => this.listeSessions = liste, (error) => console.log(error));
  }

  ngOnInit() {
    this.recupererSesssions();
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
