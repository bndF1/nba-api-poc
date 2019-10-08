import { Constants } from './../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Utils } from '../utils';

@Injectable()
export class TeamsService {

  TEAMS_API = '/teams';

  constructor(private httpClient: HttpClient) {
  }


  public getAllTeams(): Observable<any> {
    return this.httpClient.get(`${Constants.BASE_API_URL + this.TEAMS_API}`)
      .pipe(map((result: ApiPlayersResponse<Team>) => result.data));
  }



  getTeamsByName(searchTerm: any) {
    const params = Utils.buildParams(25, 0).set('search', searchTerm);
    return this.httpClient.get(`${Constants.BASE_API_URL + this.TEAMS_API}`, { params })
      .pipe(map((result: ApiPlayersResponse<Team>) => result.data));
  }

}
