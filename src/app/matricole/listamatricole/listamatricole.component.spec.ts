import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamatricoleComponent } from './listamatricole.component';

describe('ListamatricoleComponent', () => {
  let component: ListamatricoleComponent;
  let fixture: ComponentFixture<ListamatricoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListamatricoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListamatricoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
