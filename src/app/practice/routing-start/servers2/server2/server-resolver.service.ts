import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService2 } from '../servers2.service';

interface Server {
    id: number;
    name: string;
    status: string;
}
@Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(
        private serversService2: ServersService2
    ) { }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Server> | Promise<Server> | Server {
        return this.serversService2.getServer(+route.params['id']);
    }

}
