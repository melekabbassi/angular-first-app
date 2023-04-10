import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPersonneComponent } from './dash-personne.component';

describe('DashPersonneComponent', () => {
  let component: DashPersonneComponent;
  let fixture: ComponentFixture<DashPersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashPersonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
