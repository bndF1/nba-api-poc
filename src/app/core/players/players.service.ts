import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../constants';
import { WindowRefService } from '../window/window-ref.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PlayersService {
  // USAGE: GET /players/:lastName/:firstName
  private PLAYER_IMG_URL = 'https://nba-players.herokuapp.com/players';

  private _window: Window;

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

}
