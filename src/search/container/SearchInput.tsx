import React from 'react';
import { useHistory } from 'react-router';
import { AutoComplete, Input, Space, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAutoComplete, setKeyword } from '../state';
import { userData } from '../../user/state';
import { Store } from '../../common/store';

export default function SearchInput(): JSX.Element {
  const keyword = useSelector((state: Store) => state.search.keyword);
  const dispatch = useDispatch();
  function onChangeKeyword(value: string) {
    if (value !== keyword) {
      dispatch(setKeyword(value));
      dispatch(fetchAutoComplete(value));
    }
  }

  const autoCompletes = useSelector(
    (state: Store) => state.search.autoCompletes
  );
  const history = useHistory();
  function gotoUser(value: string) {
    const user = autoCompletes.find(item => item.name === value);
    if (user) {
      dispatch(userData(user));
      history.push(`/user/${user.name}`);
    }
  }

  return (
    <AutoComplete
      value={keyword}
      onChange={onChangeKeyword}
      onSelect={gotoUser}
      style={{ width: '100%' }}
      options={autoCompletes.map(item => ({
        value: item.name,
        label: (
          <Space>
            <Typography.Text strong>{item.name}</Typography.Text>
            <Typography.Text type="secondary">
              {item.department}
            </Typography.Text>
            <Typography.Text>{item.tag}</Typography.Text>
          </Space>
        )
      }))}
      autoFocus
    >
      <Input
        size="large"
        placeholder="검색어를 입력해주세요."
        prefix={<SearchOutlined />}
      />
    </AutoComplete>
  );
}

/* react-redux 사용 x */

// const [, forceUpdate] = useReducer(v => v + 1, 0);
// const keyword = store.getState().search.keyword;

// useEffect(() => {
//     let prevKeyword = store.getState().search.keyword;
//     const unsubcribe = store.subscribe(() => {
//         const nextKeyword = store.getState().search.keyword;
//         if(prevKeyword !== nextKeyword){
//             forceUpdate()
//         }
//         prevKeyword = nextKeyword
//     })
//     return () => unsubcribe();
// }, [])

// function onChange_keyword(value){
//     store.dispatch(setKeyword(value));
//     store.dispatch(fetchAutoComplete(value))
// }
