import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './views/list-view/list-view.component';
import { DetailsViewComponent } from './views/details-view/details-view.component';


const routes: Routes = [
  {
    path: 'list-orders',
    pathMatch: 'full',
    component: ListViewComponent
  },
  {
    path: 'order-details/:id',
    pathMatch: 'full',
    component: DetailsViewComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list-orders'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
