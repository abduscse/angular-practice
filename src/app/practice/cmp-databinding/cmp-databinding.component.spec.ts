import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDatabindingComponent } from './cmp-databinding.component';

describe('CmpDatabindingComponent', () => {
  let component: CmpDatabindingComponent;
  let fixture: ComponentFixture<CmpDatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpDatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
