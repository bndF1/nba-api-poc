import { Component, OnInit, TemplateRef } from '@angular/core';
import { TeamsService } from '../../core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  teams;

  constructor(private teamService: TeamsService) { }

  ngOnInit() {
    this.teams = this.teamService.getAllTeams();
  }
}