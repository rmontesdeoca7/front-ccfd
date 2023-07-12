import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environments';
import { User, AuthStatus, LoginResponse } from '../interfaces';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject( HttpClient );

  private _currentUser = signal<User|null>( null );
  private _authStatus = signal<AuthStatus>( AuthStatus.checking ); 

  public currentUser = computed( () => this._currentUser() );
  public authStatus = computed( () => this._authStatus() );

  constructor() { }

  login ( email: string, password: string ): Observable<boolean> {
    const url = `${this.baseUrl}/auth/login`;
    const body = { email, password };

    return this.http.post<LoginResponse>( url, body )
    .pipe(
      tap( ({ user, token }) => {
        this._currentUser.set(user);
        this._authStatus.set( AuthStatus.authenticated );
        localStorage.setItem( 'token', token );
      }),
      map(() => true),
      catchError( err => throwError(() => err.error.message))
    )
  }
}
