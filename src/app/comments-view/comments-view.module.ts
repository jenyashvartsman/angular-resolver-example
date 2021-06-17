import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsViewComponent } from './comments-view.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CommentsViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: CommentsViewComponent}])
  ]
})
export class CommentsViewModule {
}
