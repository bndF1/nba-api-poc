import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NebularModule } from '../../shared';
import { StatsComponent } from './stats.component';

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
