import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PresentateursDetailPage } from './presentateurs-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PresentateursDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PresentateursDetailPage]
})
export class PresentateursDetailPageModule {}
