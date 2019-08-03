import { Component, OnInit } from '@angular/core';
import { flatMap, map, tap, toArray } from 'rxjs/operators';
import { PlayersService } from '../../core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players$;
  ghosts = [];
  pageSize = 25;
  currentPage = 0;
  loading = false;
  players = new Array();
  constructor(private playersService: PlayersService) {}

  ngOnInit() {
    this.ghosts = new Array(25);
  }

  getPlayerImg(player: any) {
    return this.playersService.getPlayerImage(
      player.first_name,
      player.last_name
    );
  }

  trackByFn(index, item) {
    return item.id;
  }

  loadNext() {
    if (this.loading) {
      return;
    }

    this.loading = true;
    this.ghosts = new Array(this.pageSize);

    this.players$ = this.getPlayersByPage(this.currentPage).pipe(
      map(result => {
        this.players.push(...result);
        return this.players;
      }),
      tap(() => {
        this.loading = false;
        this.currentPage++;
        this.ghosts = [];
      })
    );
  }

  getPlayersByPage(page) {
    return this.playersService.getPlayers(page).pipe(
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
}
