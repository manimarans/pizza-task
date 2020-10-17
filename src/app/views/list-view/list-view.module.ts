import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListViewComponent } from './list-view.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ActionControlComponent } from './components/action-control/action-control.component';


@NgModule({
  declarations: [
    ListViewComponent,
    ActionControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [ListViewComponent]
})
export class ListViewModule { }
