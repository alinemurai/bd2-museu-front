import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoColecaoComponent } from './grafico-colecao.component';

describe('GraficoColecaoComponent', () => {
  let component: GraficoColecaoComponent;
  let fixture: ComponentFixture<GraficoColecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoColecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoColecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
