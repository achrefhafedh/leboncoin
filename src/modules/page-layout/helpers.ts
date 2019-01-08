// Simulate API with Asynchronous LocalStorage
export const asyncLocalStorage = {
  setItem: (key: string, value: string) =>
    Promise.resolve().then(() => localStorage.setItem(key, value)),
  getItem: (key: string) =>
    Promise.resolve().then(() => localStorage.getItem(key)),
  clear: () => {
    localStorage.clear();
  },
};
