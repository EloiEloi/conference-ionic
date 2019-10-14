import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';




@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.page.html',
  styleUrls: ['./telephone.page.scss'],
})
export class TelephonePage implements OnInit {

  constructor() { }

  infos;





  ngOnInit() {
    Plugins.Device.getInfo().then((deviceInfos) => this.infos = deviceInfos);

  }

}
