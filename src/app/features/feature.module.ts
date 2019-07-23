import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { StatsModule } from './stats/stats.module';
import { PlayersModule } from './players/players.module';
import { GamesModule } from './games/games.module';
import { TeamsModule } from './teams/teams.module';
import { FeatureRoutingModule} from './feature-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
  ],
  exports :[
    MainModule  
  ],
  declarations: []
})
export class FeatureModule { }