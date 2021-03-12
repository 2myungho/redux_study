import produce from 'immer';

export const USER = 'user/USER' //user 데이터 저장
export const FETCHUSER = 'user/FETCHUSER'; //user name 값

export const user_data = (user) => ({type: USER, payLoad: {user}})
export const fetchUser = (name) => ({type: FETCHUSER, payLoad: {name}})

const INITIAL_STATE = {
    user: undefined,
};

function useReducer(state = INITIAL_STATE, action ){
    switch(action.type) {
        case USER:
            return produce(state, draft => {
                draft.user = action.payLoad.user
            })
        default :
            return state;
    } 
}
export default useReducer;





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