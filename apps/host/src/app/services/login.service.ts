import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn = signal(false);

  toggleLoggedIn() {
    this.isLoggedIn.update((cur) => !cur);
  }
}
