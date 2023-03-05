import { TestBed } from '@angular/core/testing';

import { PostsAdminService } from './posts-admin/posts-admin.service';

describe('PostsAdminService', () => {
  let service: PostsAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
