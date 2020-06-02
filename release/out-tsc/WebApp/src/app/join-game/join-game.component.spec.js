/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { JoinGameComponent } from './join-game.component';
describe('JoinGameComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [JoinGameComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(JoinGameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=join-game.component.spec.js.map