import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrotinetListComponent } from './trotinet-list.component';

describe('TrotinetListComponent', () => {
  let component: TrotinetListComponent;
  let fixture: ComponentFixture<TrotinetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrotinetListComponent]
    });
    fixture = TestBed.createComponent(TrotinetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
