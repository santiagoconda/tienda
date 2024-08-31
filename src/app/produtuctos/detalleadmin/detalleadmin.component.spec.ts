import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleadminComponent } from './detalleadmin.component';

describe('DetalleadminComponent', () => {
  let component: DetalleadminComponent;
  let fixture: ComponentFixture<DetalleadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
