import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { HomesComponent } from './homes/homes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  {
    path: 'detail/:id',
    component: DetailsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'homes',
    component: HomesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
