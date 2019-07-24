import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TeamsService } from './teams/teams.service';
import { ApiInterceptorService } from './api-interceptor.service';
import { PlayersService } from './players/players.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
   providers: [
    TeamsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true,
    },
    PlayersService
  ]
})
export class CoreModule { }
