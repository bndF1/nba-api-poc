import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../core';
import { withLatestFrom, concatMap, mergeMap, map, flatMap, tap, concatAll, merge, mapTo, concatMapTo, switchMap, toArray } from 'rxjs/operators';
import { combineLatest, of, concat, from } from 'rxjs';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players$;
  ghosts = [];
  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.ghosts = new Array(10);
    this.players$ =
      this.playersService.getAllPlayers()
        .pipe(
          flatMap(player =>
            player.data
          ),
          flatMap(data => {
            const img$ = this.getPlayerImg(data);
            return img$.pipe(map((res) => {
              data.picture = res;
              return data;
            }));
          }),
          toArray(),
          tap(() => this.ghosts = [])
        );
  }

  getPlayerImg(player: any) {
    return this.playersService.getPlayerImage(player.first_name, player.last_name);
  }

}