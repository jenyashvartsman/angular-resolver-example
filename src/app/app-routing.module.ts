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
    loadChildren: () => import('./views/posts-view/posts-view.module').then(m => m.PostsViewModule)
  },
  {
    path: 'post/:id',
    loadChildren: () => import('./views/post-view/post-view.module').then(m => m.PostViewModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./views/comments-view/comments-view.module').then(m => m.CommentsViewModule)
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
