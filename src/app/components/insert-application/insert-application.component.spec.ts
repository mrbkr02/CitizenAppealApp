import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertApplicationComponent } from './insert-application.component';

describe('InsertApplicationComponent', () => {
  let component: InsertApplicationComponent;
  let fixture: ComponentFixture<InsertApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
