import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule, NbLayoutModule, NbContextMenuModule, NbActionsModule, NbMenuModule } from '@nebular/theme';
import { NbButtonModule, NbCardModule, NbDialogModule } from '@nebular/theme';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbActionsModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    CommonModule,
    NbThemeModule,
    NbLayoutModule,
    NbActionsModule,
    NbMenuModule,
    NbContextMenuModule,
    NgxSkeletonLoaderModule
  ],
  declarations: []
})
export class SharedModule { }