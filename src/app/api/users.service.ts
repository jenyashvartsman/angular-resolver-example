import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Injectable()
export class UsersService {

  private readonly url = `${environment.baseApiUrl}/users`

  constructor(private readonly http: HttpClient) {
  }

  getUser(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.url}/${id}`)
  }
}
