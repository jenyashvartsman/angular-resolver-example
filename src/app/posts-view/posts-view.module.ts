import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsViewComponent } from './posts-view.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PostsViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: PostsViewComponent}])
  ]
})
export class PostsViewModule {
}
