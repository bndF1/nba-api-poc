import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Players } from './players.abstract';
import { PlayersComponent } from './players.component';


describe('PlayersAbstractComponent', () => {
  let component: Players;
  let fixture: ComponentFixture<Players>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Players]
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
