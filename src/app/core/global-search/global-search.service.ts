import { Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PlayersService } from '@nba/core/players/players.service';
import { TeamsService } from '@nba/core/teams/teams.service';


@Injectable({
  providedIn: 'root'
})
export class GlobalSearchService {

  constructor(private playersService: PlayersService, private teamsService: TeamsService) { }

  autocompletePlayers = (searchTerm: string) => this.playersService.getPlayersByName(searchTerm);
  autocompleteTeams = (searchTerm: string) => this.teamsService.getAllTeams()
    .pipe(
      map((teams: Team[]) =>
        teams.filter((team: Team) =>
          team.city.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
          || team.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
          || team.full_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))),
      // toArray()
    )


  allAutoComplete = (searchTerm: string): Observable<PlayersAndTeams[]> => {
    return this.autocompletePlayers(searchTerm)
      .pipe(
        mergeMap((players: PlayersAndTeams[]) =>
          this.autocompleteTeams(searchTerm)
            .pipe(
              map((teams: PlayersAndTeams[]) => (
                [...players,
                ...teams]
              ) as PlayersAndTeams[])))
      );
  }
}
