import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Players } from './players.abstract';
import { PlayersService } from '@nba/core/players/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersComponent extends Players {
  constructor(playersService: PlayersService) {
    super(playersService);
  }
}
