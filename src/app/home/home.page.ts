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
  dateDebut = '';
  dateFin = '';


  recupererDates() {
    this.appService.recupererPlanning().subscribe(
      (liste) => {
        this.listeSchedule = liste;
        this.dateDebut = liste[0].dateReadable;
        this.dateFin = liste[liste.length - 1].dateReadable;
      }
    );

  }

  ngOnInit(): void {
    this.recupererDates();
    console.log(this.listeSchedule);
  }

}
