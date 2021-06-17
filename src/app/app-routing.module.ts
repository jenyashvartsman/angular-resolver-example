import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts-view/posts-view.module').then(m => m.PostsViewModule)
  },
  {
    path: 'post/:id',
    loadChildren: () => import('./post-view/post-view.module').then(m => m.PostViewModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./comments-view/comments-view.module').then(m => m.CommentsViewModule)
  },
  {
    path: '**',
    redirectTo: 'posts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
