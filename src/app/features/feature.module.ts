import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { FeatureRoutingModule} from './feature-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  exports :[
    MainModule  
  ],
  declarations: []
})
export class FeatureModule { }