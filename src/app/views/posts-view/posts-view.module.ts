import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsViewComponent } from './view/posts-view.component';
import { RouterModule } from '@angular/router';
import { PostsService } from '../../api/posts.service';
import { PostsResolver } from './resolver/posts.resolver';
import { FormsModule } from '@angular/forms';


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
    }]),
    FormsModule
  ],
  providers: [
    PostsService,
    PostsResolver
  ]
})
export class PostsViewModule {
}
