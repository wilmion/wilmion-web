import { TestBed } from '@angular/core/testing';

import { StorageItem, StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Local Storage', () => {
    it('getLocalStorage: Should return null when not exist the key.', () => {
      spyOn(localStorage, 'getItem').and.returnValue(null);

      const result = service.getLocalStorage('KEY');

      expect(result).toBeFalsy();
    });

    it('getLocalStorage: Should return null when the expiration pass.', () => {
      const data: StorageItem = {
        expiration: '05-10-2022',
        payload: {
          item: '123',
        },
      };

      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(data));

      const result = service.getLocalStorage('KEY');

      expect(result).toBeFalsy();
    });

    it('getLocalStorage: Should return the data.', () => {
      const data: StorageItem = {
        expiration: new Date().toDateString(),
        payload: {
          item: '123',
        },
      };

      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(data));

      const result = service.getLocalStorage<StorageItem>('KEY');

      expect(result).toEqual(data);
    });

    it('setLocalStorage: Should create a local storage.', () => {
      const data = {
        item: 'abc',
      };

      const method = spyOn(localStorage, 'setItem');

      service.setLocalStorage(data, 'KEY');

      expect(method).toHaveBeenCalledTimes(1);
    });

    it('removeToLocalStorage: Should execute delete storage items', () => {
      const method = spyOn(localStorage, 'removeItem');

      service.removeToLocalStorage('KEY');

      expect(method).toHaveBeenCalledOnceWith('KEY');
    });
  });

  describe('Session storage', () => {
    it("setSessionStorage: Should execute the 'setItem' function", () => {
      const method = spyOn(sessionStorage, 'setItem');

      const obj = { data: null };

      service.setSessionStorage(JSON.stringify(obj), 'KEY');

      expect(method).toHaveBeenCalledTimes(1);
    });

    it("getSessionStorage: Should execute the 'getItem' function and return null when not exist key", () => {
      const method = spyOn(sessionStorage, 'getItem').and.returnValue(null);

      const result = service.getSessionStorage('KEY');

      expect(method).toHaveBeenCalledOnceWith('KEY');
      expect(result).toBeFalsy();
    });

    it("getSessionStorage: Should execute the 'getItem' function and return the value when exist key", () => {
      const obj = { data: null };

      const method = spyOn(sessionStorage, 'getItem').and.returnValue(
        JSON.stringify(obj)
      );

      const result = service.getSessionStorage('KEY');

      expect(method).toHaveBeenCalledOnceWith('KEY');
      expect(result).toEqual(obj);
    });

    it("removeToSessionStorage: Should execute the 'removeItem' function with parameters ", () => {
      const method = spyOn(sessionStorage, 'removeItem');

      service.removeToSessionStorage('KEY');

      expect(method).toHaveBeenCalledOnceWith('KEY');
    });
  });

  describe('findOnLocalOrSession', () => {
    it('Should be a item where ubicated in localStorage', () => {
      const value: StorageItem = {
        expiration: new Date().toDateString(),
        payload: {
          item: '123',
        },
      };

      const getItemStorage = spyOn(localStorage, 'getItem').and.returnValue(
        JSON.stringify(value)
      );
      const getItemSession = spyOn(sessionStorage, 'getItem').and.returnValue(
        null
      );

      const result = service.findOnLocalOrSession('KEY');

      expect(getItemStorage).toHaveBeenCalledOnceWith('KEY');
      expect(getItemSession).toHaveBeenCalledOnceWith('KEY');
      expect(result).toEqual(value.payload);
    });

    it('Should be a item where ubicated in session', () => {
      const value = {
        item: '123',
      };

      const getItemStorage = spyOn(localStorage, 'getItem').and.returnValue(
        null
      );
      const getItemSession = spyOn(sessionStorage, 'getItem').and.returnValue(
        JSON.stringify(value)
      );

      const result = service.findOnLocalOrSession('KEY');

      expect(getItemStorage).toHaveBeenCalledOnceWith('KEY');
      expect(getItemSession).toHaveBeenCalledOnceWith('KEY');
      expect(result).toEqual(value);
    });

    it('Should be a item where ubicated in localStorage when both is not null', () => {
      const value: StorageItem = {
        expiration: new Date().toDateString(),
        payload: {
          item: '123',
        },
      };

      const getItemStorage = spyOn(localStorage, 'getItem').and.returnValue(
        JSON.stringify(value)
      );
      const getItemSession = spyOn(sessionStorage, 'getItem').and.returnValue(
        JSON.stringify(value.payload)
      );

      const result = service.findOnLocalOrSession('KEY');

      expect(getItemStorage).toHaveBeenCalledOnceWith('KEY');
      expect(getItemSession).toHaveBeenCalledOnceWith('KEY');
      expect(result).toEqual(value.payload);
    });

    it('Should be null where both are null', () => {
      const getItemStorage = spyOn(localStorage, 'getItem').and.returnValue(
        null
      );
      const getItemSession = spyOn(sessionStorage, 'getItem').and.returnValue(
        null
      );

      const result = service.findOnLocalOrSession('KEY');

      expect(getItemStorage).toHaveBeenCalledOnceWith('KEY');
      expect(getItemSession).toHaveBeenCalledOnceWith('KEY');
      expect(result).toEqual(null);
    });
  });
});
