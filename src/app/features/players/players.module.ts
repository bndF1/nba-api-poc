import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NebularModule } from '../../shared/';
import { SharedFeaturesModule } from '../shared/shared-features.module';
import { GhostsPlayersComponent } from './ghosts-players/ghosts-players.component';
import { PlayersComponent } from './players.component';

const routes: Routes = [
  {
    path: '',
    component: PlayersComponent
  }];

@NgModule({
  imports: [
    CommonModule,
    NebularModule,
    RouterModule.forChild(routes),
    SharedFeaturesModule
  ],
  exports: [
    PlayersComponent
  ],
  declarations: [PlayersComponent, GhostsPlayersComponent]
})
export class PlayersModule { }
