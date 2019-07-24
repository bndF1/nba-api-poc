import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NebularModule } from '../../shared/';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureRoutingModule} from '../feature-routing.module';
import { CoreModule } from '../../core/core.module';
import { StatsModule } from '../stats/stats.module';



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
  entryComponents : [MainComponent]
})
export class MainModule { }
