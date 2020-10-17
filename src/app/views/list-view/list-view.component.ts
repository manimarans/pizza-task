import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  constructor(private appService: AppService) {
  }
  rows: any = [];
  columns: any = [];
  status: any = [];
  ngOnInit() {
    this.appService.orderDetails.subscribe( res => {
      if (!res) {
        this.appService.getData();
      } else {
        this.rows = res.data.listData;
        this.columns = res.data.listSettings.columns;
        this.status = res.data.listSettings.status;
      }
    });
  }

  takeAction(row) {
    const newStatus = this.status.filter(res => (row.statusId + 1) === res.id);
    if (newStatus.length) {
      row.statusId = newStatus[0].id;
      row.status = newStatus[0].status;
    }
  }
}
