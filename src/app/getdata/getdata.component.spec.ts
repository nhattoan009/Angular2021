import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GETdataComponent } from './getdata.component';

describe('GETdataComponent', () => {
  let component: GETdataComponent;
  let fixture: ComponentFixture<GETdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GETdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GETdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
