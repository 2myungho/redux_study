import {all, put, call, takeEvery} from 'redux-saga/effects';
import { autoCompletes_add } from '.';
import {callApi} from '../../common/util/api';

console.log(all)
console.log(put)
console.log(call)
console.log(takeEvery)

function* fetchAutoComplete({payload}){
    const {keyword} = payload
    const {isSuccess, data} = yield call(callApi, {
        url: '/user/search',
        params: {keyword},
    })
    
    console.log(data);
    if(isSuccess && data){
        console.log("콤플리츠 데이터 저장")
        yield put(autoCompletes_add(data));
    }
}
export default function* (){
    yield all([
        takeEvery('search/FETCHAUTOCOMPLETES', fetchAutoComplete),
    ])
}