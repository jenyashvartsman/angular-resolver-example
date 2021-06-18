import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../api/posts.service';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.scss']
})
export class PostsViewComponent implements OnInit {

  posts: PostModel[] = []

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.data.subscribe(data => this.posts = data.posts);
  }
}
