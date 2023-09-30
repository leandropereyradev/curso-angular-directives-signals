import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _http = inject(HttpClient);
  private _baseUrl = 'https://reqres.in/api/users';

  getUserById(id: number): Observable<User> {
    return this._http
      .get<SingleUserResponse>(`${this._baseUrl}/${id}`)
      .pipe(map((resp) => resp.data));
  }
}
