import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackListComponent } from './snack-list.component';

describe('SnackListComponent', () => {
  let component: SnackListComponent;
  let fixture: ComponentFixture<SnackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
