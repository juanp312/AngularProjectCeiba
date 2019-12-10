import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarMedicamentoComponent } from './borrar-medicamento.component';

describe('BorrarMedicamentoComponent', () => {
  let component: BorrarMedicamentoComponent;
  let fixture: ComponentFixture<BorrarMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
