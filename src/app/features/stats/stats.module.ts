import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';
import { NebularModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    NebularModule
  ],
  exports: [
    StatsComponent
  ],
  declarations: [StatsComponent]
})
export class StatsModule { }