import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { Schedule } from "../model/schedule";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private appService: AppService) { }

  listeSchedule: Schedule[] = [];

  recupererDate() {

    this.appService.recupererPlanning().subscribe((liste) => this.listeSchedule = liste);
  }

  ngOnInit(): void {
    this.recupererDate();
  }

}
