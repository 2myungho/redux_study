import {all, call, put, takeEvery} from 'redux-saga/effects';
import { user_data } from '.';
import {callApi} from '../../common/util/api'

function* fetchUser ({payLoad}){
    const name = payLoad.name

    const {isSuccess, data} = yield call(callApi, {
        url: '/user/search',
        params: {keyword: name},
    });
    if(isSuccess && data){
        const user = data.find(item => item,name === name);
        if(user){
            console.log(user_data(user))
            yield put(user_data(user));
        }
    }
}
export default function* (){
    yield all([takeEvery('user/FETCHUSER', fetchUser)]);
}