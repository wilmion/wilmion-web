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
      localStorage.removeItem(key);

      return null;
    }

    return data;
  }

  // Session storage

  setSessionStorage(payload: any, key: string) {
    sessionStorage.setItem(key, JSON.stringify(payload));
  }

  getSessionStorage<T>(key: string): T {
    const item = sessionStorage.getItem(key);

    if (!item) throw new Error('Nothing in sessionStorage');

    return JSON.parse(item);
  }

  private checkValidity(object: { expiration: string; [key: string]: any }) {
    const currentDate = new Date();

    const objectDate = new Date(object.expiration);

    return objectDate.getTime() < currentDate.getTime();
  }
}
