import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateproductosComponent } from './updateproductos.component';

describe('UpdateproductosComponent', () => {
  let component: UpdateproductosComponent;
  let fixture: ComponentFixture<UpdateproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateproductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
