/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { GameOverComponent } from './game-over.component';
describe('GameOverComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GameOverComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GameOverComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=game-over.component.spec.js.map