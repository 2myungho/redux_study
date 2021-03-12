import produce from 'immer';

export const INPUT_CHANGE = 'search/INPUT_CHANGE';
export const AUTOCOMPLETES_ADD = 'search/AUDOAUTOCOMPLETES_ADD' //서버 데이터 저장
export const FETCHAUTOCOMPLETES = 'search/FETCHAUTOCOMPLETES'; //api호출

export const input_change = (keyword) => ({type: INPUT_CHANGE, payload: {keyword}})
export const autoCompletes_add = (autoCompletes) => ({type: AUTOCOMPLETES_ADD, payload: {autoCompletes}})
export const fetchAutoComplete = keyword => ({type: FETCHAUTOCOMPLETES, payload: {keyword}})

const INITIAL_STATE = {
    keyword: '',
    autoCompletes: [],
};
// function searchReducer(state = INITIAL_STATE, action) {
//     switch(action.type) {
//         case INPUT_CHANGE:
//             return {
//                 ...state,
//                 keyword: action.keyword
//             }
//         case AUTOCOMPLETES_ADD:
//             return {
//                 ...state,
//                 autoCompletes: action.autoCompletes
//             }
//         case FETCHAUTOCOMPLETES:
//             return {
//                 ...state,
//                 keyword: action.keyword
//             }
//         default:
//             return state;
//     }   

// }

// export default searchReducer;


function searchReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case INPUT_CHANGE:
            return produce(state, draft => {
                draft.keyword = action.payload.keyword
            })
        case AUTOCOMPLETES_ADD:
            return produce(state, draft => {
                draft.autoCompletes = action.payload.autoCompletes
            })
        case FETCHAUTOCOMPLETES:
            return produce(state, draft => {
                draft.keyword = action.payload.keyword
            })
        default:
            return state;
    }   

}

export default searchReducer;