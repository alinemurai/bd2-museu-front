import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCompradosComponent } from './lista-comprados.component';

describe('ListaCompradosComponent', () => {
  let component: ListaCompradosComponent;
  let fixture: ComponentFixture<ListaCompradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCompradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCompradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
