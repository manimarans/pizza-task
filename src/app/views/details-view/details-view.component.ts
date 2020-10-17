import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {
  order: any = null;
  selectedId = 107;
  constructor(private appService: AppService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.selectedId = Number(params.get('id'));
      });
    this.appService.orderDetails.subscribe( res => {
      if (!res) {
        this.appService.getData();
      } else {
        this.order = res.data.ordersDetails.filter(res => res.orderId === this.selectedId)[0];
      }
    });
  }

}
