import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";

import { Observable } from "rxjs";


@Injectable()
export class ApiInterceptorService implements HttpInterceptor {

  constructor() {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const updatedRequest = request.clone({
      headers: request.headers
        .set("X-RapidAPI-Host", "free-nba.p.rapidapi.com")
        .set('X-RapidAPI-Key', 'd7e17d7f9dmshfb748c19eade1a2p17b54fjsnbc436705fd17')
    });


    return next.handle(updatedRequest);

  }
}