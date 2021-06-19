import { TestBed } from '@angular/core/testing';

import { CommentsPostsResolver } from './comments-posts.resolver';

describe('CommentsPostsResolver', () => {
  let resolver: CommentsPostsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CommentsPostsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
