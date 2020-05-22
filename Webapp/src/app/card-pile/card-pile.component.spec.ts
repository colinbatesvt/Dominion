/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardPileComponent } from './card-pile.component';

describe('CardPileComponent', () => {
  let component: CardPileComponent;
  let fixture: ComponentFixture<CardPileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
