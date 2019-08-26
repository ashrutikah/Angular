import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {RouterModule} from'@angular/router';
import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';
import { SupplierComponent } from './Supplier/CustomerApp.SupplierComponent';
import { HomeComponent } from './Home/CustomerApp.HomeComponent';
import { MasterComponent } from './Home/CustomerApp.MasterComponent';
import  {MainRoutes} from './Routing/CustomerApp.Routing';
@NgModule({
  declarations: [
    CustomerComponent,SupplierComponent, HomeComponent, MasterComponent  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class CustomerModule { }
