import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../core';
import { map, flatMap, tap, toArray } from 'rxjs/operators';
import { combineLatest, of, concat, from } from 'rxjs';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players$;
  ghosts = [];
  pageSize;
  currentPage = 0;
  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.ghosts = new Array(25);
    this.players$ = this.getPlayersByPage(this.currentPage);

  }

  getPlayerImg(player: any) {
    return this.playersService.getPlayerImage(player.first_name, player.last_name);
  }

  trackByFn(index, item) {
    return item.id;
  }

  getPlayersByPage(page) {
    return this.playersService.getPlayers(page)
      .pipe(
        flatMap((player: { data }) =>
          player.data
        ),
        flatMap((data: { picture }) => {
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

  loadNext() {
    if (this.ghosts.length) { return }
    this.ghosts = new Array(25);
    this.players$ = this.getPlayersByPage(this.currentPage++);
    //.pipe(map((result) => {
    //   return [...result]
    // }));
  }

}