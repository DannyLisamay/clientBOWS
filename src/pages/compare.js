import React from 'react'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { SortBy } from "../components/Compare/Compare";

const Compare = () => {
    return (
        <div class="box">
            <Container fluid>
                <Row>
                    <SortBy />
                </Row>
            </Container>
        </div>
    );
};

export default Compare;
