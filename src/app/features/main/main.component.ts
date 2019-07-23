import { Component, OnInit, TemplateRef } from '@angular/core';
import { TeamsService } from '../../core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  teams;

  tabs: any[] = [
    {
      title: 'Players',
      icon: 'person',
      route: 'main/players',
      responsive: true,
    },
    {
      title: 'Games',
      icon: 'paper-plane-outline',
      responsive: true,
      route: 'main/games',
    },
    {
      title: 'Teams',
      icon: 'flash-outline',
      responsive: true,
      route: './main/teams',
    },
  ];

  constructor(private teamService: TeamsService) { }

  ngOnInit() {
    this.teams = this.teamService.getAllTeams();




  }
}