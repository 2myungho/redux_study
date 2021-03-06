import { Col, Row, Typography } from 'antd';
import React from 'react';
import Settings from '../component/Settings';
import SearchInput from './SearchInput';

export default function Search(): JSX.Element {
  return (
    <>
      <Row justify="end" style={{ padding: 20 }}>
        <Col>
          <Settings logout={() => {}} />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col>
          <Typography.Title>찾 아 야 한 다</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col span={12}>
          <SearchInput />
        </Col>
      </Row>
    </>
  );
}
