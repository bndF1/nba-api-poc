import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { NebularModule } from '../../shared/';
import { RouterModule, Routes } from '@angular/router';

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
  exports:[
    TeamsComponent
  ],
  declarations: [TeamsComponent]
})
export class TeamsModule { }