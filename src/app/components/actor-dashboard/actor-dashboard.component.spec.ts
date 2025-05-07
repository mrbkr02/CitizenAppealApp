import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDashboardComponent } from './actor-dashboard.component';

describe('ActorDashboardComponent', () => {
  let component: ActorDashboardComponent;
  let fixture: ComponentFixture<ActorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActorDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
