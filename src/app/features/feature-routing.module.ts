import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'stats', loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule) },
      { path: 'teams', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule) },
      { path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule) },
      { path: 'players', loadChildren: () => import('./players/players.module').then(m => m.PlayersModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
