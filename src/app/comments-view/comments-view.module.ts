import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsViewComponent } from './comments-view.component';
import { RouterModule } from '@angular/router';
import { CommentsResolver } from './comments.resolver';


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
        postIds: CommentsResolver
      }
    }])
  ],
  providers: [
    CommentsResolver
  ]
})
export class CommentsViewModule {
}
