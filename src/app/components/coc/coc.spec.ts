import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coc } from './coc';

describe('Coc', () => {
  let component: Coc;
  let fixture: ComponentFixture<Coc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
