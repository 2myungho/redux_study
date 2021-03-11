import {all, put, call, takeEvery} from 'redux-saga/effects';
import { setValue } from '.';
import {callApi} from '../../common/util/api';

function* fetchAutoComplete({keyword}){
    //keyword를 어떻게 받을 수 있는지
    const {isSuccess, data} = yield call(callApi, {
        url: '/user/search',
        params: {keyword},
    })
    
    console.log(data);
    if(isSuccess && data){
        yield put(setValue('autoCompletes', data));
    }
}
export default function* (){
    yield all([
        takeEvery('search/FETCHAUTOCOMPLETES', fetchAutoComplete),
    ])
}