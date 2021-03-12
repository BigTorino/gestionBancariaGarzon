import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBitacoraComponent } from './edit-bitacora.component';

describe('EditBitacoraComponent', () => {
  let component: EditBitacoraComponent;
  let fixture: ComponentFixture<EditBitacoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBitacoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
