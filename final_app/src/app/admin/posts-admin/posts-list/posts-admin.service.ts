import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../../models/post';
import { PostsComment } from '../../../models/posts-comment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getById(id: number) {
    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );
  }
}