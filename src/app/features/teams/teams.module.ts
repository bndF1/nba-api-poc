import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NebularModule } from '../../shared/';
import { TeamsComponent } from './teams.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent
  }];

@NgModule({
  imports: [
    CommonModule,
    NebularModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    TeamsComponent
  ],
  declarations: [TeamsComponent]
})
export class TeamsModule { }
