import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReciepeComponent } from './create-reciepe.component';

describe('CreateReciepeComponent', () => {
  let component: CreateReciepeComponent;
  let fixture: ComponentFixture<CreateReciepeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReciepeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReciepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
