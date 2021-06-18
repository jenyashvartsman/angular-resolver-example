import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostCommentModel {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Injectable()
export class PostsService {

  private readonly url = `${environment.baseApiUrl}/posts`

  constructor(private readonly http: HttpClient) {
  }

  getAllPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.url);
  }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`${this.url}/${id}`);
  }

  getPostComments(id: number): Observable<PostCommentModel[]> {
    return this.http.get<PostCommentModel[]>(`${this.url}/${id}/comments`);
  }
}
