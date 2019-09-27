import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiInterceptorService } from './api-interceptor.service';
import { PlayersService } from './players/players.service';
import { TeamsService } from './teams/teams.service';
import { WindowRefService } from './window/window-ref.service';


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
    PlayersService,
    WindowRefService
  ]
})
export class CoreModule { }
