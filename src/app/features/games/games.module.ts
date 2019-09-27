import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NebularModule } from '../../shared/';
import { GamesComponent } from './games.component';

const routes: Routes = [{
  path: '',
  component: GamesComponent
}];

@NgModule({
  imports: [
    CommonModule,
    NebularModule,
    RouterModule.forChild(routes)
  ],
  exports: [GamesComponent],
  declarations: [GamesComponent]
})
export class GamesModule { }
