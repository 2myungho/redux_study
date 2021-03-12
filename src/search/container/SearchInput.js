import React from 'react'
import { AutoComplete, Input, Space, Typography } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAutoComplete, input_change } from '../state';
import { user_data } from '../../user/state';
import { useHistory } from 'react-router';


export default function SearchInput() {
    const keyword = useSelector(state => state.search.keyword);
    const dispatch = useDispatch();
    function setKeyword(value){
        if(value !== keyword){
            console.log("인풋 변경")
            dispatch(input_change(value))
            console.log("패치")
            dispatch(fetchAutoComplete(value))
        }
    }

    const autoCompletes = useSelector(state => state.search.autoCompletes)
    const history = useHistory();
    function gotoUser(value){
        const user = autoCompletes.find(item => item.name === value);
        if(user){
            console.log("콤플리츠 시작")
            dispatch(user_data(user));
            history.push(`/user/${user.name}`);
        }
    }

    return (
        <AutoComplete
            value={keyword}
            onChange={setKeyword}
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
                ),
            }))}
            autoFocus
        >
        <Input 
            size="large" 
            placeholder="검색어를 입력해주세요." 
            prefix= {<SearchOutlined/>} 
        />
        </AutoComplete>
    )
}
