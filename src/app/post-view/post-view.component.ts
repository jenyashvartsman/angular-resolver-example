import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../api/posts.service';
import { UserModel, UsersService } from '../api/users.service';
import { CommentsService, PostCommentModel } from '../api/comments.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  post: PostModel | null = null;
  user: UserModel | null = null;
  comments: PostCommentModel[] = [];

  constructor(private readonly actRoute: ActivatedRoute,
              private readonly userService: UsersService,
              private readonly commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.actRoute.data.subscribe(data => {
      this.post = data.post;
      if (this.post) {
        this.getUserInfo(this.post.userId);
        this.getPostComments(this.post.userId);
      }
    });
  }

  getUserInfo(userId: number): void {
    this.userService.getUser(userId).subscribe(
      res => this.user = res
    );
  }

  getPostComments(postId: number): void {
    this.commentsService.getPostsComments([postId]).subscribe(
      res => this.comments = res
    );
  }
}
