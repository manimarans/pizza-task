import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService { orderDetails: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private http: HttpClient) {
  }

  getData() {
    this.http.get('assets/OrderList.json').subscribe(res => {
      this.orderDetails.next(res);
    });
  }
}
