import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../core';
import { mergeMap, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs;


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players;
  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    // this.players = 
    this.playersService.getAllPlayers().pipe(
      combineLatest(player  => this.getPlayerImg(player))
    ).subscribe(res => console.log(res));
  }



  getPlayerImg(player: any) {
    return this.playersService.getPlayerImage(player.first_name, player.last_name);
  }

}