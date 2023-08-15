import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/interfaces/orders.interface';
import { OrdersService } from 'src/app/services/orders.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.scss']
})
export class OrdersDetailComponent {
  orderDetail!: IOrder;

  constructor(private orderService: OrdersService, private urlService: UrlService, private activeRoute: ActivatedRoute){
    this.urlService.setInHome(true);
  }

  ngOnInit(): void {
    this.orderService.getAllByOrderNumber(this.activeRoute.snapshot.params['id']).subscribe(
      {
        next: (response: IOrder) => {
          console.log(response)
          this.orderDetail = response;
        },
        error: (error: any) => {
          console.log(error)
        },
        complete: () => {},
      }
    )
  }
}
