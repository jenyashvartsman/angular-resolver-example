import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../../../api/posts.service';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.scss']
})
export class PostsViewComponent implements OnInit {

  posts: PostModel[] = [];
  selectedPosts: number[] = [];

  constructor(private readonly actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.data.subscribe(data => this.posts = data.posts);
  }

  isPostChecked(postId: number): boolean {
    return this.selectedPosts.includes(postId);
  }

  postChecked(event: any, postId: number): void {
    this.selectedPosts = event.target.checked ?
      [...this.selectedPosts, postId] : this.selectedPosts.filter(id => id !== postId);
  }

  toggleAllPosts(): void {
    this.selectedPosts = this.isAllPostsSelected() ? [] : this.posts.map(post => post.id);
  }

  isAllPostsSelected(): boolean {
    return this.selectedPosts.length === this.posts.length;
  }
}
