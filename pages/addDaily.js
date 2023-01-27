import Router from 'next/router'
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import Header from "../components/Header"
import React from 'react';

export default class addDaily extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        fetch(
            '/addDaily/post', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                content: this.state.content,
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        }
        );
        Router.push({
            pathname: '/index',
        });
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <Header />

                <Row className="mt-4">
                    <Col xs={12} md={{ span: 6, offset: 3 }}>
                        <Card>
                            <Card.Header>lulu</Card.Header>
                            <Card.Body>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>タイトル</Form.Label>
                                        <Form.Control
                                            name="title"
                                            type="text"
                                            placeholder="Please enter a title"
                                            value={this.state.title}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>内容</Form.Label>
                                        <Form.Control
                                            as='textarea'
                                            rows='3'
                                            name="content"
                                            type="text"
                                            placeholder="Please enter a content"
                                            value={this.state.content}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        追加
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}