import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // Local Storage

  setLocalStorage(payload: any, key: string) {
    localStorage.setItem(key, JSON.stringify(payload));
  }

  getLocalStorage<T>(key: string): T {
    const item = localStorage.getItem(key);

    if (!item) throw new Error('Nothing in localstorage');

    return JSON.parse(item);
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
}
