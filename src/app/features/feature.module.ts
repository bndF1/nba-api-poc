import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './feature-routing.module';
import { MainModule } from './main/main.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  exports: [
    MainModule
  ],
  declarations: []
})
export class FeatureModule { }
