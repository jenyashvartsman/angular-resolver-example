import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostViewComponent } from './post-view.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PostViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: PostViewComponent}])
  ]
})
export class PostViewModule {
}
