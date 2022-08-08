import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Branch1Component } from './branch1/branch1.component';
import { Branch2Component } from './branch2/branch2.component';



@NgModule({
  declarations: [
    Branch1Component,
    Branch2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[Branch1Component,
  Branch2Component,]
})
export class BranchModule { }
