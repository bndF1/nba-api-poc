import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { NebularModule } from '../../shared/';
import { FeatureRoutingModule } from '../feature-routing.module';
import { StatsModule } from '../stats/stats.module';
import { MainComponent } from './main.component';



@NgModule({
  imports: [
    CommonModule,
    NebularModule,
    FeatureRoutingModule,
    CoreModule,
    StatsModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent],
  entryComponents: [MainComponent]
})
export class MainModule { }
