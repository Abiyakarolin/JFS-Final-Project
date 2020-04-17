import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateComponent } from './donate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DonateComponent],
  imports: [ CommonModule, ReactiveFormsModule, RouterModule ],
  exports:[DonateComponent]
})
export class DonateModule { }
