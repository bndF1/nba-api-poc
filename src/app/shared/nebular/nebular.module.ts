import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbDialogModule, NbListModule, NbRouteTabsetModule  } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forRoot(),
    NbListModule,
    NbRouteTabsetModule,
    NbEvaIconsModule
  ],
  exports: [
    NbCardModule,
    NbButtonModule,
    NbDialogModule,
    NbListModule,
    NbRouteTabsetModule,
    NbEvaIconsModule
  ],
  declarations: []
})
export class NebularModule { }