import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ghosts-players',
  templateUrl: './ghosts-players.component.html',
  styleUrls: ['./ghosts-players.component.scss']
})
export class GhostsPlayersComponent {
  @Input() ghosts: any[];
  constructor() {}
}
