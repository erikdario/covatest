import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagraficaprincipaleComponent } from './anagraficaprincipale.component';

describe('AnagraficaprincipaleComponent', () => {
  let component: AnagraficaprincipaleComponent;
  let fixture: ComponentFixture<AnagraficaprincipaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnagraficaprincipaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagraficaprincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
