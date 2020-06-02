/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { CardPileComponent } from './card-pile.component';
describe('CardPileComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CardPileComponent]
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
//# sourceMappingURL=card-pile.component.spec.js.map