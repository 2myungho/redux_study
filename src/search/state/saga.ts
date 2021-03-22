import {
  all,
  put,
  call,
  takeEvery,
  AllEffect,
  ForkEffect
} from 'redux-saga/effects';
import {
  fetchAutoComplete,
  FETCHAUTOCOMPLETES,
  setAutoCompletes
} from './index';
import { callApi } from '../../common/util/api';

type DataProps = {
  isSuccess: boolean;
  data: User[];
};

function* fetchAutoCompleteAPI({
  payload
}: ReturnType<typeof fetchAutoComplete>) {
  const { keyword } = payload;
  const { isSuccess, data }: DataProps = yield call(callApi, {
    url: '/user/search',
    params: { keyword }
  });

  if (isSuccess && data) {
    yield put(setAutoCompletes(data));
  }
}
export default function* sagaAll(): Generator<
  AllEffect<ForkEffect<never>>,
  void,
  unknown
> {
  yield all([takeEvery(FETCHAUTOCOMPLETES, fetchAutoCompleteAPI)]);
}
