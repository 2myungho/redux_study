import produce from 'immer';

export const SETKEYWORD = 'search/SETKEYWORD';
export const SETAUTOCOMPLETES = 'search/SETAUTOCOMPLETES';
export const FETCHAUTOCOMPLETES = 'search/FETCHAUTOCOMPLETES';

export const setKeyword = (keyword: string) =>
  ({
    type: SETKEYWORD,
    payload: { keyword }
  } as const);

export const setAutoCompletes = (autoCompletes: User[]) =>
  ({
    type: SETAUTOCOMPLETES,
    payload: { autoCompletes }
  } as const);

export const fetchAutoComplete = (keyword: string) =>
  ({
    type: FETCHAUTOCOMPLETES,
    payload: { keyword }
  } as const);

type SearchAction =
  | ReturnType<typeof setKeyword>
  | ReturnType<typeof setAutoCompletes>
  | ReturnType<typeof fetchAutoComplete>;

type SearchState = {
  keyword: string;
  autoCompletes: User[];
};

const INITIAL_STATE: SearchState = {
  keyword: '',
  autoCompletes: []
};

function searchReducer(
  state: SearchState = INITIAL_STATE,
  action: SearchAction
): SearchState {
  switch (action.type) {
    case SETKEYWORD:
      return produce(state, draft => {
        draft.keyword = action.payload.keyword;
      });
    case SETAUTOCOMPLETES:
      return produce(state, draft => {
        draft.autoCompletes = action.payload.autoCompletes;
      });
    case FETCHAUTOCOMPLETES:
      return produce(state, draft => {
        draft.keyword = action.payload.keyword;
      });
    default:
      return state;
  }
}

export default searchReducer;

// function searchReducer(state: SearchState = INITIAL_STATE, action: SearchAction): SearchState {
//     switch(action.type) {
//         case SETKEYWORD:
//             return {
//                 ...state,
//                 keyword: action.payload.keyword
//             }
//         case SETAUTOCOMPLETES:
//             return {
//                 ...state,
//                 autoCompletes: action.payload.autoCompletes
//             }
//         case FETCHAUTOCOMPLETES:
//             return {
//                 ...state,
//                 keyword: action.payload.keyword
//             }
//         default:
//             return state;
//     }

// }

// export default searchReducer;
