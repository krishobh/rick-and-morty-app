import { Row, Col, Spin } from 'antd';

const ActivityLoader = () => {
  return (
    <Row justify="center">
        <Col xs={3} style={{width:300, padding: 10}}>
            <Spin tip="Loading characters..."></Spin>
        </Col>
    </Row>
  )
}

export default ActivityLoader