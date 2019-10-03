import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbContextMenuModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbThemeModule
  } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { SearchModule } from './search/search.module';

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbActionsModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbSearchModule,
    SearchModule
  ],
  exports: [
    CommonModule,
    NbThemeModule,
    NbLayoutModule,
    NbActionsModule,
    NbMenuModule,
    NbContextMenuModule,
    NbSearchModule,
    SearchModule
  ],
  declarations: []
})
export class SharedModule { }
