import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyvalueComponent } from './keyvalue.component';

describe('KeyvalueComponent', () => {
  let component: KeyvalueComponent;
  let fixture: ComponentFixture<KeyvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyvalueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
