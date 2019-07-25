import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule, NebularModule } from '../../shared/';
import { SharedFeaturesModule } from '../shared/shared-features.module';
import { GhostsPlayersComponent } from './ghosts-players/ghosts-players.component';

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