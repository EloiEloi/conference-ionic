import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private appService: AppService) { }

  recupererDate() {
    this.appService.recupererPlanning().subscribe((liste) => console.log(liste));
  }

  ngOnInit(): void {

  }

}
