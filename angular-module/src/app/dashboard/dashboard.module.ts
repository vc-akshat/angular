import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ChildHomeComponent } from './home/child-home/child-home.component';



@NgModule({
  declarations: [
    HomeComponent,
    ChildHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HomeComponent,
    ChildHomeComponent
  ]
})
export class DashboardModule { }
