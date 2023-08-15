import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersDetailComponent } from './orders-detail/orders-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OrdersListComponent,
    pathMatch: 'full',
  },
  {
    path: 'detail/:id',
    component: OrdersDetailComponent,
  },
]

@NgModule({
  declarations: [
    OrdersListComponent,
    OrdersDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class OrdersModule { }
