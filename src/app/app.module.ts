import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminComponent } from './backend/admin/admin.component';
import { ProductComponent } from './backend/product/product.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AdminComponent, ProductComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
