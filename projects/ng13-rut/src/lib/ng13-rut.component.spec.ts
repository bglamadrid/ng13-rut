import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng13RutComponent } from './ng13-rut.component';

describe('Ng13RutComponent', () => {
  let component: Ng13RutComponent;
  let fixture: ComponentFixture<Ng13RutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng13RutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng13RutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
