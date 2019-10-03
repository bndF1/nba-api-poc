import { map, tap } from 'rxjs/operators';
import { OnInit } from '@angular/core';
import { PlayersService } from 'src/app/core';

export abstract class Players implements OnInit {

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

  trackByFn(item) {
    return item.id;
  }

  loadNext() {
    if (this.loading) {
      return;
    }

    this.loading = true;
    this.ghosts = new Array(25);

    this.players$ = this.playersService.getPlayersByPageWithImg(this.currentPage)
      .pipe(
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
