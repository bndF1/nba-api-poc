import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TeamsService } from './teams/teams.service';
import { ApiInterceptorService } from './api-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [TeamsService, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptorService,
    multi: true
  }]
})
export class CoreModule { }