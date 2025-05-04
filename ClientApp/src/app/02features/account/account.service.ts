import { User } from './../../01shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../../01shared/models/register.model';
import { environment } from '../../../environments/environment.development';
import { Login } from '../../01shared/models/login.model';
import { map, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private userSource = new ReplaySubject<User | null>(1);
  user$ = this.userSource.asObservable();

  constructor(private http: HttpClient) {}

  login(model: Login) {
    return this.http
      .post<User>(`${environment.appUrl}/api/account/login`, model)
      .pipe(
        map((user: User) => {
          if (user) {
            this.setUser(user);
          }
        })
      );
  }

  register(model: Register) {
    return this.http.post(`${environment.appUrl}/api/account/register`, model);
  }

  private setUser(user: User) {
    localStorage.setItem(environment.userKey, JSON.stringify(user));
    this.userSource.next(user);
  }
}
