import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AdminLinkComponent from '../../components/admin/AdminLinkComponent';
import AdminChatRoomComponent from '../../components/admin/AdminChatRoomComponent';

const AdminChatsPage = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinkComponent />
      </Col>
      <Col md={10}>
        <AdminChatRoomComponent />
      </Col>
    </Row>
  );
};

export default AdminChatsPage;
