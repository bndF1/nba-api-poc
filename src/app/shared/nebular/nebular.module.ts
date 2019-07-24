import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbDialogModule, NbListModule, NbRouteTabsetModule, NbUserModule  } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forRoot(),
    NbListModule,
    NbRouteTabsetModule,
    NbEvaIconsModule,
    NbUserModule
  ],
  exports: [
    NbCardModule,
    NbButtonModule,
    NbDialogModule,
    NbListModule,
    NbRouteTabsetModule,
    NbEvaIconsModule,
    NbUserModule
  ],
  declarations: []
})
export class NebularModule { }