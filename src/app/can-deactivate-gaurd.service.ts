import { Observable } from 'rxjs';
import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGaurd implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(
        component: CanComponentDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
        next?: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}

