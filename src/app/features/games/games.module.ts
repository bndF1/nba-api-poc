import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[GamesComponent],
  declarations: [GamesComponent]
})
export class GamesModule { }