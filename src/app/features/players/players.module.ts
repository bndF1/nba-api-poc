import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { RouterModule, Routes } from '@angular/router';
import { NebularModule } from '../../shared/';
import { SharedModule } from '../../shared/';
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
    SharedModule,
    RouterModule.forChild(routes)
  ], 
  exports: [
    PlayersComponent
  ],
  declarations: [PlayersComponent, GhostsPlayersComponent]
})
export class PlayersModule { }