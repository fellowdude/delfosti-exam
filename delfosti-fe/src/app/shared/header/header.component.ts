import { Component } from '@angular/core';
import { IHomeAction } from 'src/app/interfaces/home-action.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  homeActionList: Array<IHomeAction> = [
    {
      label: 'Usuarios',
      link: 'users'
    },
    {
      label: 'Ordenes',
      link: 'orders'
    }
  ];
}
