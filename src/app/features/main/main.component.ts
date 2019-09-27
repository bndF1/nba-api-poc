import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  tabs: any[] = [
    {
      title: 'Players',
      icon: 'person',
      route: ['players'],
      responsive: true,
    },
    {
      title: 'Games',
      icon: 'paper-plane-outline',
      responsive: true,
      route: ['games'],
    },
    {
      title: 'Teams',
      icon: 'flash-outline',
      responsive: true,
      route: ['teams'],
    },
  ];

  constructor() { }

  ngOnInit() {
  }
}
