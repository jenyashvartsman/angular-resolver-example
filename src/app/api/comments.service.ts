import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PostCommentModel {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private readonly url = `${environment.baseApiUrl}/comments`

  constructor(private readonly http: HttpClient) {
  }

  getPostsComments(postIds: number[]): Observable<PostCommentModel[]> {
    return this.http.get<PostCommentModel[]>(`${this.url}`, {params: {postId: postIds}});
  }
}
