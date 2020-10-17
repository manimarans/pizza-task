import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsViewComponent } from './views/details-view/details-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ListViewModule } from './views/list-view/list-view.module';

@NgModule({
  declarations: [
    AppComponent,
    DetailsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
