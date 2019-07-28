import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../constants';
import { WindowRefService } from '../window/window-ref.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PlayersService {
  // USAGE: GET /players/:lastName/:firstName
  private PLAYER_IMG_URL = 'https://nba-players.herokuapp.com/players';

  private _window: Window;
  private itemsPerPage = 25;

  PLAYERS = '/players';
  constructor(private httpClient: HttpClient, private windowRefService: WindowRefService) {
    this._window = this.windowRefService.nativeWindow;
  }

  public getAllPlayers(): Observable<any> {
    return this.httpClient.get(`${Constants.BASE_API_URL + this.PLAYERS}`);
  }

  public getPlayerImage(firstName, lastName): Observable<any> {
    return this.httpClient.get(`${this.PLAYER_IMG_URL}` + '/' + `${lastName}` + '/' + `${firstName}`, { responseType: 'blob' }).pipe(map(x => this.createImageFromBlob(x)));
  }

  private createImageFromBlob(image: Blob) {
    return this._window.URL.createObjectURL(image);
  }

  // ?page=0&per_page=25
  public getPlayers(page): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('per_page', this.itemsPerPage.toString());
    return this.httpClient.get(`${Constants.BASE_API_URL + this.PLAYERS}`, { params });
  }
  
}
