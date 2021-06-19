import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { PostModel, PostsService } from '../api/posts.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CommentsPostsResolver implements Resolve<PostModel[]> {
  constructor(private readonly postsService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel[]> {

    /*return this.postsService.getPost(Number(route.paramMap.get('id'))).pipe(
      catchError(() => of(null))
    );*/

    const postIds: number[] = route.queryParamMap.getAll('postId').map(postId => Number(postId));
    return forkJoin(
      postIds.map(postId => this.postsService.getPost(postId))
    ).pipe(
      catchError(() => of([]))
    )
  }
}
