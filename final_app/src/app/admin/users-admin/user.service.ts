import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  getById(id: number) {
    return this.http.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
