import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { BitacoraListComponent } from './bitacora-list.component';
describe('BitacoraListComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [BitacoraListComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BitacoraListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bitacora-list.component.spec.js.map