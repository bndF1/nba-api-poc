import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbToastrModule, NbUserModule } from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NbToastrModule.forRoot(),
    NbUserModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
