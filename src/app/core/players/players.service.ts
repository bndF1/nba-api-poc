import {
  concatMap,
  map,
  switchMap,
  toArray
  } from 'rxjs/operators';
import { Constants } from '../constants';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WindowRefService } from '../window/window-ref.service';

@Injectable()
export class PlayersService {
  // USAGE: GET /players/:lastName/:firstName
  private PLAYER_IMG_URL = 'https://nba-players.herokuapp.com/players';

  private _window;
  private itemsPerPage = 25;

  PLAYERS_API = '/players';

  allPlayers$ = this.httpClient.get(`${Constants.BASE_API_URL + this.PLAYERS_API}`)
    .pipe(map((result: ApiPlayersResponse<Player>) => result.data));

  constructor(
    private httpClient: HttpClient,
    private windowRefService: WindowRefService
  ) {
    this._window = this.windowRefService.nativeWindow;
  }

  public getPlayersByPageWithImg(page) {
    return this.getPlayersByPage(page)
      .pipe(
        this.playersWithImg()
      );
  }

  public getPlayersByName(name: string) {
    const params = this.buildParams().set('search', name);
    return this.getPlayers(params)
      .pipe(
        this.playersWithImg()
      );
  }

  private getPlayers(params: HttpParams): Observable<Player[]> {
    return this.httpClient.get(`${Constants.BASE_API_URL + this.PLAYERS_API}`, { params })
      .pipe(map((result: ApiPlayersResponse<Player>) => result.data));
  }

  public getPlayerImage(firstName, lastName) {
    return this.httpClient
      .get(
        `${this.PLAYER_IMG_URL}` + '/' + `${lastName}` + '/' + `${firstName}`,
        { responseType: 'blob' }
      )
      .pipe(
        map(x => this.createImageFromBlob(x)));
  }

  private playersWithImg() {
    return switchMap((players: Player[]) => from(players)
      .pipe(concatMap((player: Player) => this.getPlayerImg(player)
        .pipe(map((img: string) => ({
          ...player,
          picture: img
        }) as Player))),
        toArray())
    );
  }

  // ?page=0&per_page=25
  private getPlayersByPage(page): Observable<Player[]> {
    const params = this.buildParams(page);
    return this.getPlayers(params);
  }



  private getPlayerImg(player: Player) {
    return this.getPlayerImage(player.first_name, player.last_name);
  }



  private createImageFromBlob(image: Blob) {
    return this._window.URL.createObjectURL(image);
  }




  private buildParams(page?: any) {
    return new HttpParams()
      .set('page', page)
      .set('per_page', this.itemsPerPage.toString());
  }
}
