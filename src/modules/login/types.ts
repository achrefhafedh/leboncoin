export type User = {
  username: string;
  password: string;
};

export type UserStore = {
  username: string;
  type: 'logged' | 'guest';
};
