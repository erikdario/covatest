import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllegatimatricolaComponent } from './allegatimatricola.component';

describe('AllegatimatricolaComponent', () => {
  let component: AllegatimatricolaComponent;
  let fixture: ComponentFixture<AllegatimatricolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllegatimatricolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllegatimatricolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
