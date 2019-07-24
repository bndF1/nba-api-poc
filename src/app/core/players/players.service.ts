import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../constants';

@Injectable()
export class PlayersService {
  // USAGE: GET /players/:lastName/:firstName
  private PLAYER_IMG_URL = 'https://nba-players.herokuapp.com/players';

  PLAYERS = '/players';
  constructor(private httpClient: HttpClient) { }

  public getAllPlayers(): Observable<any> {
    return this.httpClient.get(`${Constants.BASE_API_URL + this.PLAYERS}`);
  }

  public getPlayerImage(firstName, lastName): Observable<any> {
    return this.httpClient.get(`${this.PLAYER_IMG_URL}` + '/' + `${lastName}` + '/' + `${firstName}`,{ responseType: 'blob' });
  }

}
