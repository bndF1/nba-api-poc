import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap, map, toArray } from 'rxjs/operators';
import { Constants } from '../constants';
import { WindowRefService } from '../window/window-ref.service';

@Injectable()
export class PlayersService {
  // USAGE: GET /players/:lastName/:firstName
  private PLAYER_IMG_URL = 'https://nba-players.herokuapp.com/players';

  private _window: Window;
  private itemsPerPage = 25;

  PLAYERS = '/players';
  constructor(
    private httpClient: HttpClient,
    private windowRefService: WindowRefService
  ) {
    this._window = this.windowRefService.nativeWindow;
  }

  public getAllPlayers(): Observable<any> {
    return this.httpClient.get(`${Constants.BASE_API_URL + this.PLAYERS}`);
  }

  public getPlayerImage(firstName, lastName): Observable<any> {
    return this.httpClient
      .get(
        `${this.PLAYER_IMG_URL}` + '/' + `${lastName}` + '/' + `${firstName}`,
        { responseType: 'blob' }
      )
      .pipe(map(x => this.createImageFromBlob(x)));
  }

  private createImageFromBlob(image: Blob) {
    return this._window.URL.createObjectURL(image);
  }

  // ?page=0&per_page=25
  private getPlayers(page): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('per_page', this.itemsPerPage.toString());
    return this.httpClient.get(`${Constants.BASE_API_URL + this.PLAYERS}`, {
      params
    });
  }

  public getPlayersByPage(page) {
    return this.getPlayers(page).pipe(
      flatMap((player: { data }) => player.data),
      flatMap((data: { picture }) => {
        const img$ = this.getPlayerImg(data);
        return img$.pipe(
          map(res => {
            data.picture = res;
            return data;
          })
        );
      }),
      toArray()
    );
  }

  private getPlayerImg(player: any) {
    return this.getPlayerImage(player.first_name, player.last_name);
  }
}
