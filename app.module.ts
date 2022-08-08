import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DinningComponent } from './dinning/dinning.component';
import { SwimmingComponent } from './swimming/swimming.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { CarParkingComponent } from './car-parking/car-parking.component';
import { Branch1Component } from './branch/branch1/branch1.component';
import { Branch2Component } from './branch/branch2/branch2.component';
import { BranchModule } from './branch/branch.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CustomStyleDirective } from './custom-style.directive';
@NgModule({
  declarations: [
    AppComponent,
    DinningComponent,
    SwimmingComponent,
    KitchenComponent,
    CarParkingComponent,
    CustomStyleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BranchModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
