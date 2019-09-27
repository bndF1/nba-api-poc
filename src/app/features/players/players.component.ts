import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
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
  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.ghosts = new Array(25);
    this.loadNext();
  }

  trackByFn(index, item) {
    return item.id;
  }

  loadNext() {
    if (this.loading) {
      return;
    }

    this.loading = true;
    this.ghosts = new Array(25);

    this.players$ = this.playersService.getPlayersByPage(this.currentPage).pipe(
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
}
