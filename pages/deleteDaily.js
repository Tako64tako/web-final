import Router from 'next/router';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import Header from "../components/Header"
import React from 'react';

export default class deleteDaily extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handleChange(event) {
    //     const target = event.target;
    //     const name = target.name;
    //     const value = target.value;

    //     this.setState({
    //         [name]: value
    //     });
    // }

    handleSubmit(event) {
        fetch('/deleteDaily/get:');
        // fetch(
        //     '/deleteDaily/post:id', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         // title: this.state.title,
        //         // content: this.state.content,
        //         // id: this.state.id,
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json; charset=utf-8',
        //     }
        // }
        // );
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
                            <Card.Header>削除画面</Card.Header>
                            <Card.Body>
                                <Form onSubmit={this.handleSubmit}>
                                    <Button variant="primary" type="submit">
                                        削除する
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}