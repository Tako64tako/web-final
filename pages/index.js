import { Button, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Header from "../components/Header"
import React from 'react';

import fetch from 'node-fetch'

export default class index extends React.Component {
  static async getInitialProps() {
    const res = await fetch('http://127.0.0.1:3000/index/get')
    const posts = await res.json()
    return { posts }
  }

  render() {
    return (
      <div>

        <Header />

        <Row className="mt-2">
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            <Button href="/addDaily" block variant='outline-primary'>
              日記を追加する
            </Button>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Header>日記一覧</Card.Header>
              <ListGroup className="list-group-flush">
                <ListGroupItem >
                  {this.props.posts.map(daily => (
                    <div>
                      <Card.Title>{daily.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {daily.created}
                      </Card.Subtitle>
                      <Card.Text>
                        {daily.content}
                      </Card.Text>
                      <Button href={`/editDaily?id=${daily._id}`} variant='outline-primary'>
                        編集
                      </Button>
                      <Button href={`/deleteDaily?id=${daily._id}`} variant='outline-danger'>
                        削除
                      </Button>
                    </div>
                  ))}
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}