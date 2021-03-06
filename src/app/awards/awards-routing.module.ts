import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwardsPage } from './awards.page';

const routes: Routes = [
  {
    path: '',
    component: AwardsPage
  },
  {
    path: ':awardId',
    loadChildren: () => import('./award-details/award-details.module').then( m => m.AwardDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwardsPageRoutingModule {}
