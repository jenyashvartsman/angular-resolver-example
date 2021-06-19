import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostModel, PostsService } from '../../../api/posts.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PostResolver implements Resolve<PostModel | null> {

  constructor(private readonly postsService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel | null> {
    return this.postsService.getPost(Number(route.paramMap.get('id'))).pipe(
      catchError(() => of(null))
    );
  }
}
