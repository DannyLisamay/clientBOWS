// Resort component 
import React, { useEffect, useState } from 'react'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
// WeatherWidget component 
import WeatherWidget from './WeatherWidget'
// ***EXAMPLE RESORT IMAGE FOR TESTING***
import resortImg from '../../images/TrailMap.jpg';

const Resort = () => {
    // ***HARD CODED / PLACEHOLDERS FOR TESTING***
    // Tabs varibles
    var description = (<div>
        <h6>Description</h6>
        <p>***DESCRIPTION PLACE HOLDER*** <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>);
    var mountain = (<div>
        <h6>Description</h6>
        <p>***MOUNTAIN PLACE HOLDER*** <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>);
    var weather = WeatherWidget();
    var snow = (<div>
        <h6>Snow Report</h6>
        <p>***DESCRIPTION PLACE HOLDER*** <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>);
    var activities = (<div>
        <h6>Activities</h6>
        <p>***DESCRIPTION PLACE HOLDER*** <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>);
    var events = (<div>
        <p>***DESCRIPTION PLACE HOLDER***
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p></div>);
    var reviews = (<div>
        <p>***DESCRIPTION PLACE HOLDER***
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p></div>);
    var prices = (<div><p>***DESCRIPTION PLACE HOLDER***</p></div>);

    // Default return for resort component
    return (
        <div class="box" >
            <Container fluid>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <Row>
                            <h4>* RESORT NAME PLACE HOLDER*</h4>
                        </Row>
                        <Row>
                            ***LINK TO WEBSITE***
                    </Row>
                        <Row>
                            <img src={resortImg} alt="resortImg" style={{ width: "100%" }} />
                        </Row>
                    </Col>
                    <Col xs={12} md={6} lg={8}>
                        <div class="tabBox">
                            <Tabs defaultActiveKey="Description" id="uncontrolled-tab-example">
                                <Tab eventKey="Description" title="Description">
                                    {description}
                                </Tab>
                                <Tab eventKey="Mountain" title="Mountain">
                                    {mountain}
                                </Tab>
                                <Tab eventKey="Weather" title="Weather">
                                    {weather}
                                </Tab>
                                <Tab eventKey="Snow" title="Snow">
                                    {snow}
                                </Tab>
                            </Tabs>
                        </div>
                        <div class="tabBox">
                            <Tabs defaultActiveKey="Activities" id="uncontrolled-tab-example">
                                <Tab eventKey="Activities" title="Activities">
                                    {activities}
                                </Tab>
                                <Tab eventKey="Events" title="Events">
                                    {events}
                                </Tab>
                                <Tab eventKey="Reviews" title="Reviews">
                                    {reviews}
                                </Tab>
                                <Tab eventKey="Prices" title="Prices">
                                    {prices}
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Resort