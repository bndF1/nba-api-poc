import { Component } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PlayersService } from 'src/app/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {

  constructor(public playerService: PlayersService) {

  }

  public model: Player;

  result = [];

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map((term: string) => term === '' ? []
        : this.playerService.getPlayersByName(term).pipe(
          map((players: Player[]) => this.result = players)
        )
        // : statesWithFlags.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
      ))

  // formatter = (x: { name: string }) => x.name;
}
