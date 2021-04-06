import React from 'react'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { SortBy, ResortList } from "../components/Compare/Compare";

const Compare = () => {
    return (
        <div class="box">
            <Container fluid>
                <Row>
                    <SortBy />
                </Row>
                <ResortList />
            </Container>
        </div>
    );
};

export default Compare;
