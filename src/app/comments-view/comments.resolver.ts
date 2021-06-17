import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class CommentsResolver implements Resolve<number[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number[]> {
    return of(
      route.queryParamMap.getAll('postId').map(postId => Number(postId))
    );
  }
}
