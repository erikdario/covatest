import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedamatricolaComponent } from './schedamatricola.component';

describe('SchedamatricolaComponent', () => {
  let component: SchedamatricolaComponent;
  let fixture: ComponentFixture<SchedamatricolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedamatricolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedamatricolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
