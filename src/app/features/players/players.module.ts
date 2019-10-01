import { CommonModule } from '@angular/common';
import { GhostsPlayersComponent } from './ghosts-players/ghosts-players.component';
import { NebularModule } from '../../shared/';
import { NgModule } from '@angular/core';
import { PlayersComponent } from './players.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedFeaturesModule } from '../shared/shared-features.module';

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
