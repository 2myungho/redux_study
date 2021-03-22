import {
  all,
  AllEffect,
  call,
  ForkEffect,
  put,
  takeEvery
} from 'redux-saga/effects';
import { FETCHUSER, fetchUser, userData } from './index';
import { callApi } from '../../common/util/api';

type ApiProps = {
  isSuccess: boolean;
  data: User[];
};

function* fetchUserAPI({ payLoad }: ReturnType<typeof fetchUser>) {
  const { name } = payLoad;

  const { isSuccess, data }: ApiProps = yield call(callApi, {
    url: '/user/search',
    params: { keyword: name }
  });
  if (isSuccess && data) {
    const user = data.find(item => item, name);
    if (user) {
      yield put(userData(user));
    }
  }
}
export default function* sagaAll(): Generator<
  AllEffect<ForkEffect<never>>,
  void,
  unknown
> {
  yield all([takeEvery(FETCHUSER, fetchUserAPI)]);
}
