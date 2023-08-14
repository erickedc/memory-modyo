import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {


  private userKey: string = 'user_name'

  private userNameSubject = new BehaviorSubject<string | null>(this.getUser());
  userName$: Observable<string | null> = this.userNameSubject.asObservable();

  constructor() { }

  setUser(user: string){
    localStorage.setItem(this.userKey, user)
    this.userNameSubject.next(user);
  }

  private getUser(): string | null {
    return localStorage.getItem(this.userKey);
  }

  clear(){
    localStorage.clear()
    this.userNameSubject.next(null);
  }
}
