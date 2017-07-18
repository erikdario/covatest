import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoriComponent } from './contatori.component';

describe('ContatoriComponent', () => {
  let component: ContatoriComponent;
  let fixture: ComponentFixture<ContatoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
