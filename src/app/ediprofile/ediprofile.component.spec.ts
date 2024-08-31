import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiprofileComponent } from './ediprofile.component';

describe('EdiprofileComponent', () => {
  let component: EdiprofileComponent;
  let fixture: ComponentFixture<EdiprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdiprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdiprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
