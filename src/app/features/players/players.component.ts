import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Players } from './players.abstract';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersComponent extends Players {

}
