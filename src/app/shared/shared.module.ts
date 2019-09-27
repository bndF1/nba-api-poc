import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbActionsModule, NbContextMenuModule, NbLayoutModule, NbMenuModule, NbThemeModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbActionsModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule
  ],
  exports: [
    CommonModule,
    NbThemeModule,
    NbLayoutModule,
    NbActionsModule,
    NbMenuModule,
    NbContextMenuModule
  ],
  declarations: []
})
export class SharedModule { }
