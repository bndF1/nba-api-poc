import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { RouterModule, Routes } from '@angular/router';
import { NebularModule } from '../../shared/';

const routes: Routes = [
  {
    path: '',
    component: PlayersComponent
  }];

@NgModule({
  imports: [
    CommonModule,
    NebularModule,
    RouterModule.forChild(routes)
  ], 
  exports: [
    PlayersComponent
  ],
  declarations: [PlayersComponent]
})
export class PlayersModule { }