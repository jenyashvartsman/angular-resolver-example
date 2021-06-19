import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostViewComponent } from './view/post-view.component';
import { RouterModule } from '@angular/router';
import { PostResolver } from './resolver/post.resolver';
import { PostsService } from '../../api/posts.service';
import { UsersService } from '../../api/users.service';
import { CommentsService } from '../../api/comments.service';


@NgModule({
  declarations: [
    PostViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: PostViewComponent,
      resolve: {
        post: PostResolver
      }
    }])
  ],
  providers: [
    PostResolver,
    PostsService,
    UsersService,
    CommentsService
  ]
})
export class PostViewModule {
}
