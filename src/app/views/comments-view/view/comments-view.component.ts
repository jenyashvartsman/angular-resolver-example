import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../../../api/posts.service';
import { PostCommentModel } from '../../../api/comments.service';

@Component({
  selector: 'app-comments-view',
  templateUrl: './comments-view.component.html',
  styleUrls: ['./comments-view.component.scss']
})
export class CommentsViewComponent implements OnInit {

  posts: PostModel[] = [];
  comments: PostCommentModel[] = [];

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.data.subscribe(data => {
      this.posts = data.posts;
      this.comments = data.comments;
    });
  }

  getCommentsByPost(postId: number): PostCommentModel[] {
    return this.comments.filter(comment => comment.postId === postId);
  }

  getPostIdsString(): string {
    return this.posts
      .map(post => post.id)
      .join(', ');
  }
}
