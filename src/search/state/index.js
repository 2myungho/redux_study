export const SETVALUE = 'search/VALUE';
export const FETCHAUTOCOMPLETES = 'search/FETCHAUTOCOMPLETES';

export const setValue = (key,value) => ({type: SETVALUE, key, value})
export const fetchAutoComplete = keyword => ({
    type: FETCHAUTOCOMPLETES,
    keyword
})

const INITIAL_STATE = {
    keyword: '',
    autoCompletes: [],
};
function searchReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SETVALUE:
            return {
                ...state,
                key: action.key,
                value: action.value
            }
        // case FETCHAUTOCOMPLETES:
        //     return {
        //         ...state,
        //         keyword: action.keyword
        //     }
        default:
            return state;
    }   

}

export default searchReducer;

import { bindActionCreators } from "redux";
import {
    createReducer,
    createSetValueAction,
    setValueReducer,
} from '../../common/redux-helper';

export const Types = {
    SetValue: 'search/SetValue',
    FetchAutoComplete: 'search/FetchAutoComplate',
};

export const actions = {
    setValue: createSetValueAction(Types.SetValue),
    fetchAutoComplete: keyword => ({
        type: Types.FetchAutoComplete,
        keyword,
    })
}

const INITIAL_STATE = {
    keyword: '',
    autoCompletes: [],
};
const reducer = createReducer(INITIAL_STATE, {
    [Types.SetValue]: setValueReducer,
}) 



export default reducer;