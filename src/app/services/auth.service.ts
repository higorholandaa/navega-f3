import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private mockUser = {
    username: '12345678900', 
    password: 'senha123',
    nome: 'João da Silva',
    token: 'mock-token-12345'
  };

  login(username: string, password: string): Observable<any> {
    if (username === this.mockUser.username && password === this.mockUser.password) {
      return of({
        user: {
          nome: this.mockUser.nome,
          emailOuCpf: this.mockUser.username
        },
        token: this.mockUser.token
      }).pipe(delay(1000)); 
    } else {
      return throwError(() => new Error('Usuário ou senha inválidos'));
    }
  }
}
