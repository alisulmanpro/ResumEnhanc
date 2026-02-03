import { StateStorage } from 'zustand/middleware';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';

const cookieStorage: StateStorage = {
  getItem: (name: string) => {
    return getCookie(name) ?? null;
  },
  setItem: (name: string, value: string) => {
    setCookie(name, value, { expires: 1 }); // Expires in 1 day
  },
  removeItem: (name: string) => {
    removeCookie(name);
  }
};

export default cookieStorage;