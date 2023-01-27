import { Navbar, Row, Col } from 'react-bootstrap';

export default function header() {
    return (
        <Row>
            <Col xs={12} md={{ span: 6, offset: 3 }}>
                <Navbar variant="light" bg="light" style={{ border: "solid 1px #c2c2c2 ", borderRadius: "5px" }}>
                    <Navbar.Brand href="/">Daily-app</Navbar.Brand>
                </Navbar>
            </Col>
        </Row>
    );
}