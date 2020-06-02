/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { PlayGameComponent } from './play-game.component';
describe('PlayGameComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlayGameComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PlayGameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=play-game.component.spec.js.map