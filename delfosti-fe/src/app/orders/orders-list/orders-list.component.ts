import { Component } from '@angular/core';
import { IOrder } from 'src/app/interfaces/orders.interface';
import { OrdersService } from 'src/app/services/orders.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent {
  orderList: Array<IOrder> = [];

  constructor(private orderService: OrdersService, private urlService: UrlService){
    this.urlService.setInHome(true);
  }

  ngOnInit(): void {
    this.orderService.getAll().subscribe(
      {
        next: (response: Array<IOrder>) => {
          console.log(response)
          this.orderList = response;
        },
        error: (error: any) => {
          console.log(error)
        },
        complete: () => {},
      }
    )
  }

}
