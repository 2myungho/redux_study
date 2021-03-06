import React, { useEffect } from 'react';
import { PageHeader, Col, Row, Descriptions, Typography } from 'antd';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../state';
import { Store } from '../../common/store';

type MatchParam = {
  name: string;
};

export default function User({
  match
}: RouteComponentProps<MatchParam>): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: Store) => state.user.user);

  const { name } = match.params;

  useEffect(() => {
    dispatch(fetchUser(name));
  }, [name, dispatch]);

  const isFetched = true;

  return (
    <Row justify="center">
      <Col xs={24} md={20} lg={14}>
        <PageHeader onBack={history.goBack} title="사용자 정보">
          {user && (
            <Descriptions layout="vertical" bordered column={1}>
              <Descriptions.Item label="이름">
                <Typography.Text>{user.name}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="소속">
                {user.department}
              </Descriptions.Item>
              <Descriptions.Item label="태그">{user.tag}</Descriptions.Item>
              <Descriptions.Item label="수정 내역">수정 내역</Descriptions.Item>
            </Descriptions>
          )}
          {!user && isFetched && (
            <Typography.Text>존재하지 않는 사용자입니다.</Typography.Text>
          )}
        </PageHeader>
      </Col>
    </Row>
  );
}
