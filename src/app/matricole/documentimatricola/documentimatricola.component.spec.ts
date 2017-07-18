import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentimatricolaComponent } from './documentimatricola.component';

describe('DocumentimatricolaComponent', () => {
  let component: DocumentimatricolaComponent;
  let fixture: ComponentFixture<DocumentimatricolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentimatricolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentimatricolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
