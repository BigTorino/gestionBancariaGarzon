import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { BitacoraFormComponent } from './bitacora-form.component';
describe('BitacoraFormComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [BitacoraFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BitacoraFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bitacora-form.component.spec.js.map