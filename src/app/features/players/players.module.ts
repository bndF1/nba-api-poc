import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';

@NgModule({
  imports: [
    CommonModule
  ], 
  exports: [
    PlayersComponent
  ],
  declarations: [PlayersComponent]
})
export class PlayersModule { }