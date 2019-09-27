import {
  NbBadgeModule,
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
  NbListModule,
  NbRouteTabsetModule,
  NbUserModule
  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgModule } from '@angular/core';

@NgModule({

  imports: [
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forRoot(),
    NbListModule,
    NbRouteTabsetModule,
    NbEvaIconsModule,
    NbUserModule,
    NbBadgeModule
  ],
  exports: [
    NbCardModule,
    NbButtonModule,
    NbDialogModule,
    NbListModule,
    NbRouteTabsetModule,
    NbEvaIconsModule,
    NbUserModule,
    NbBadgeModule
  ],
  declarations: []
})
export class NebularModule { }
