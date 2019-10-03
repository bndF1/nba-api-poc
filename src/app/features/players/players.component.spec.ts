import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NbLayoutRulerService, NbLayoutScrollService } from '@nebular/theme';
import { CoreModule } from '../../core';
import { NebularModule } from '../../shared';
import { SharedFeaturesModule } from '../shared/shared-features.module';
import { GhostsPlayersComponent } from './ghosts-players/ghosts-players.component';
import { PlayersComponent } from './players.component';


describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayersComponent,
        GhostsPlayersComponent
      ],
      imports: [
        CoreModule,
        NebularModule,
        SharedFeaturesModule,
      ],
      providers: [
        NbLayoutScrollService,
        NbLayoutRulerService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
