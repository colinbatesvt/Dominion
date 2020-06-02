/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { SetupGameComponent } from './setup-game.component';
describe('SetupGameComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SetupGameComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SetupGameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=setup-game.component.spec.js.map