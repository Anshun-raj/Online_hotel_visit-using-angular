import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch1',
  templateUrl: './branch1.component.html',
  styleUrls: ['./branch1.component.css']
})
export class Branch1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  address="Address:-Mithanpura,Near pizza-hat,Muzaffarpur";
  mob="Mob:-7890231431";

}
