import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { RouterModule, Routes } from '@angular/router';
import { NebularModule } from '../../shared/';

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