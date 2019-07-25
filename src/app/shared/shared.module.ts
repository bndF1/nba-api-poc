import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule, NbLayoutModule, NbContextMenuModule, NbActionsModule, NbMenuModule } from '@nebular/theme';
import { NbButtonModule, NbCardModule, NbDialogModule } from '@nebular/theme';

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