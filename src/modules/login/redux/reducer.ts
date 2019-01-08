export type LoginStore = {
  test: any;
};

export const initialState: LoginStore = {
  test: '[]',
};

export const loginReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    default:
      return state;
  }
};
