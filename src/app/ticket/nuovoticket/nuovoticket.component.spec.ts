import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoticketComponent } from './nuovoticket.component';

describe('NuovoticketComponent', () => {
  let component: NuovoticketComponent;
  let fixture: ComponentFixture<NuovoticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
