import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TeamsService {
  BASE_API_URL = 'https://free-nba.p.rapidapi.com/';

  TEAMS = '/teams';

  constructor(private httpClient: HttpClient) {
  }


  public getAllTeams(): Observable<any> {
    return this.httpClient.get(`${this.BASE_API_URL+ this.TEAMS}`);
  }
}