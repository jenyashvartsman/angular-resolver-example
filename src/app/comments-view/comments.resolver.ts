import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {  Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommentsService, PostCommentModel } from '../api/comments.service';

@Injectable()
export class CommentsResolver implements Resolve<PostCommentModel[]> {
  constructor(private readonly commentsService: CommentsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostCommentModel[]> {
    const postIds: number[] = route.queryParamMap.getAll('postId').map(postId => Number(postId));
    return this.commentsService.getPostsComments(postIds).pipe(
      catchError(() => of([]))
    );
  }
}
