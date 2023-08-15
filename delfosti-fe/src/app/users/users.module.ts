import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    pathMatch: 'full',
  },
]

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    MdbTabsModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule { }
