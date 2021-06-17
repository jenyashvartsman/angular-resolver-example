import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostViewComponent } from './post-view.component';
import { RouterModule } from '@angular/router';
import { PostResolver } from './post.resolver';


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
        postId: PostResolver
      }
    }])
  ],
  providers: [
    PostResolver
  ]
})
export class PostViewModule {
}
