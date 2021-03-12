import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBitacorasComponent } from './new-bitacoras.component';

describe('NewBitacorasComponent', () => {
  let component: NewBitacorasComponent;
  let fixture: ComponentFixture<NewBitacorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBitacorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBitacorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
