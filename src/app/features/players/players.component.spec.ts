import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '@nba/core/core.module';
import { GhostsPlayersComponent } from './ghosts-players/ghosts-players.component';
import { NbLayoutRulerService, NbLayoutScrollService } from '@nebular/theme';
import { NebularModule } from '@nba/shared/nebular/nebular.module';
import { PlayersComponent } from './players.component';
import { SharedFeaturesModule } from '@nba/features/shared/shared-features.module';


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
