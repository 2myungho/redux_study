import {all, put, call, takeEvery} from 'redux-saga/effects';
import { autoCompletes_add } from '.';
import {callApi} from '../../common/util/api';

function* fetchAutoComplete({payload}){
    const {keyword} = payload
    const {isSuccess, data} = yield call(callApi, {
        url: '/user/search',
        params: {keyword},
    })
    
    console.log(data);
    if(isSuccess && data){
        yield put(autoCompletes_add(data));
    }
}
export default function* (){
    yield all([
        takeEvery('search/FETCHAUTOCOMPLETES', fetchAutoComplete),
    ])
}