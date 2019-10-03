import { Component } from '@angular/core';
import { PlayersService } from '../../core';
import { Players } from './players.abstract';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent extends Players {
  constructor(playersService: PlayersService) {
    super(playersService);
  }
}
