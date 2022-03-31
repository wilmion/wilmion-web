import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // Local Storage

  setLocalStorage(payload: any, key: string) {
    localStorage.setItem(
      key,
      JSON.stringify({
        payload,
        expiration: new Date().toString(),
      })
    );
  }

  getLocalStorage<T>(key: string): T | null {
    const item = localStorage.getItem(key);

    if (!item) return null;

    const data = JSON.parse(item);

    if (!this.checkValidity(data)) {
      this.removeToLocalStorage(key);
      return null;
    }

    return data;
  }

  removeToLocalStorage(key: string) {
    return localStorage.removeItem(key);
  }

  // Session storage

  setSessionStorage(payload: any, key: string) {
    sessionStorage.setItem(key, JSON.stringify(payload));
  }

  getSessionStorage<T>(key: string): T | null {
    const item = sessionStorage.getItem(key);

    if (!item) return null;

    return JSON.parse(item);
  }

  removeToSessionStorage(key: string) {
    return sessionStorage.removeItem(key);
  }

  findOnLocalOrSession<T>(key: string) {
    const userLocal = this.getLocalStorage<{ payload: T }>(key);
    const userSession = this.getSessionStorage<T>(key);

    if (!userLocal) return userSession;

    if (!userSession) return userLocal.payload;

    return userLocal.payload;
  }

  private checkValidity(object: { expiration: string; [key: string]: any }) {
    const currentDate = new Date();

    const objectDate = new Date(object.expiration);

    return objectDate.getTime() < currentDate.getTime();
  }
}
