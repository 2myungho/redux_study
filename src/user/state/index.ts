import produce from 'immer';

export const USER = 'user/USER';
export const FETCHUSER = 'user/FETCHUSER';

export const userData: UserDate = (user: User) => ({
  type: USER,
  payLoad: { user }
});
export const fetchUser: FetchUser = (name: string) => ({
  type: FETCHUSER,
  payLoad: { name }
});

type UserAction = ReturnType<typeof userData> | ReturnType<typeof fetchUser>;

type UserState = { user: User };

const INITIAL_STATE: UserState = {
  user: {
    name: '',
    department: '',
    tag: ''
  }
};

function useReducer(
  state: UserState = INITIAL_STATE,
  action: UserAction
): UserState {
  switch (action.type) {
    case USER:
      return produce(state, draft => {
        draft.user = action.payLoad.user;
      });
    default:
      return state;
  }
}
export default useReducer;

type UserDate = (
  user: User
) => {
  type: typeof USER;
  payLoad: {
    user: User;
  };
};

type FetchUser = (
  name: string
) => {
  type: typeof FETCHUSER;
  payLoad: {
    name: string;
  };
};

// import {
//     createReducer,
//     createSetValueAction,
//     setValueReducer,
// } from '../../common/redux-helper';

// export const Types = {
//     SetValue: 'user/SetValue',
//     FetchUser: 'user/FetchUser',
// };

// export const actions = {
//     setValue: createSetValueAction(Types.SetValue),
//     fetchUser: name => ({ type: Types.FetchUser, name })
// }

// const INITIAL_STATE = {
//     user: undefined,
// };
// const reducer = createReducer(INITIAL_STATE, {
//     [Types.SetValue]: setValueReducer,
// })

// export default reducer;
