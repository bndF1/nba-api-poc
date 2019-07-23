import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbDialogModule, NbListModule } from '@nebular/theme';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forRoot(),
    NbListModule
  ],
  exports: [
    NbCardModule,
    NbButtonModule,
    NbDialogModule,
    NbListModule
  ],
  declarations: []
})
export class NebularModule { }