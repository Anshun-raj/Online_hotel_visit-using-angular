import { Component } from '@angular/core';
import { Branch1Component } from './branch/branch1/branch1.component';
import { Branch2Component } from './branch/branch2/branch2.component';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineHotel';
  navbar1="home";
  getFeedback(value:any)
  {
    console.log(value)
  }
  info:any=[];
  constructor(private dt:DataService)
  {
    this.dt.getData().subscribe(data=>{
      this.info=data
    })
  }
}
