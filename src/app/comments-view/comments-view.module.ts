import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsViewComponent } from './comments-view.component';
import { RouterModule } from '@angular/router';
import { CommentsResolver } from './comments.resolver';
import { PostsService } from '../api/posts.service';
import { CommentsService } from '../api/comments.service';
import { CommentsPostsResolver } from './comments-posts.resolver';


@NgModule({
  declarations: [
    CommentsViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: CommentsViewComponent,
      resolve: {
        comments: CommentsResolver,
        posts: CommentsPostsResolver
      }
    }])
  ],
  providers: [
    CommentsResolver,
    PostsService,
    CommentsService,
    CommentsPostsResolver
  ]
})
export class CommentsViewModule {
}
