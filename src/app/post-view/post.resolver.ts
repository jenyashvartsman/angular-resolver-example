import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class PostResolver implements Resolve<number> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number> {
    return of(Number(route.paramMap.get('id')));
  }
}
