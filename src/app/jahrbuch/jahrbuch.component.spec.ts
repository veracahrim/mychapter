import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JahrbuchComponent } from './jahrbuch.component';

describe('JahrbuchComponent', () => {
  let component: JahrbuchComponent;
  let fixture: ComponentFixture<JahrbuchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JahrbuchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JahrbuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
