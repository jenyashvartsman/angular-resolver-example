import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsViewComponent } from './posts-view.component';
import { RouterModule } from '@angular/router';
import { PostsService } from '../api/posts.service';
import { PostsResolver } from './posts.resolver';


@NgModule({
  declarations: [
    PostsViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: PostsViewComponent,
      resolve: {
        posts: PostsResolver
      }
    }])
  ],
  providers: [
    PostsService,
    PostsResolver
  ]
})
export class PostsViewModule {
}
