import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams;
  constructor(private teamService: TeamsService) { }

  ngOnInit() {
    this.teams = this.teamService.getAllTeams();
  }

}