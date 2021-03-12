import {all, call, put, takeEvery} from 'redux-saga/effects';
import {callApi} from '../../common/util/api'

function* fetchUser ({payLoad}){
    const name = payLoad.name
    console.log(name)
    const {isSuccess, data} = yield call(callApi, {
        url: '/user/search',
        params: {keyword: name},
    });
    if(isSuccess && data){
        const user = data.find(item => item,name === name);
        if(user){
            yield put(user(name));
        }
    }
}
export default function* (){
    yield all([takeEvery('user/FETCHUSER', fetchUser)]);
}