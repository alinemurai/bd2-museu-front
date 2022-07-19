import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmprestadosComponent } from './lista-emprestados.component';

describe('ListaEmprestadosComponent', () => {
  let component: ListaEmprestadosComponent;
  let fixture: ComponentFixture<ListaEmprestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEmprestadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEmprestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
