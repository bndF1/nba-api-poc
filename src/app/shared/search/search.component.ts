import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap
  } from 'rxjs/operators';
import { Component } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { PlayersService } from '@nba/core/players/players.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {

  constructor(private playerService: PlayersService, private toastrService: NbToastrService) {

  }

  public model: Player = {} as Player;

  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((searchText) => this.playerService.getPlayersByName(searchText)),
      catchError((err) => of(this.toastrService.warning(`An error occurred ${err}`)))
    );
  }

  resultFormatListValue({ first_name, last_name }: Player) {
    return first_name + ' ' + last_name;
  }

  inputFormatListValue({ first_name, last_name }: Player) {
    return first_name + ' ' + last_name;
  }
}
