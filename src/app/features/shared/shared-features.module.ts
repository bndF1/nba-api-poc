import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    NgxSkeletonLoaderModule
  ],
  declarations: []
})
export class SharedFeaturesModule { }
