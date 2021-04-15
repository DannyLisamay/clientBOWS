// Resort component 
import React from 'react'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Tab, Tabs } from 'react-bootstrap';
// WeatherWidget component 
import WeatherWidget from './WeatherWidget'
// ***EXAMPLE RESORT IMAGE FOR TESTING***
import resortImg from '../../images/TrailMap.jpg';

import { useLocation } from "react-router-dom";


const ResortInfo = () => {
    const { state } = useLocation();
    return (
        <div>
            <Row>
                <h4>{state.resort.name}</h4>
            </Row>
            <Row>
                <a href="https://www.patspeak.com/"> https://www.patspeak.com/ </a>
            </Row>
            <Row>
                <img src={resortImg} alt="resortImg" style={{ width: "100%" }} />
            </Row>
        </div>
    )
};

const ResortInfoTabBox1 = () => {
    // ***HARD CODED / PLACEHOLDERS FOR TESTING***
    const { state } = useLocation();
    console.log(state);
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
    return (
        <div className="tabBox">
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
    )
};

const ResortInfoTabBox2 = () => {
    const { state } = useLocation();
    console.log(state);

    var activities = (<div>
        <h6>Activities</h6>
        <p>***ACTIVITIES PLACE HOLDER*** <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>);

    var events = (<div>
        <p>***EVENTS PLACE HOLDER***<br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p></div>);

    var reviews = (<div>
        <p>***REVIEW PLACE HOLDER***<br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p></div>);

    var prices = (<div>
        <p>
            <b> ***EQUIPMENT RENTAL*** </b> <br />

            <b> Skis, Boots & Poles Purchase:	Price: </b> <br />
            Adult (18-64) : ${state.resort.price.rental.skiBootsPole.adult}/day <br />
            Junior (6-17)/Senior (65+): ${state.resort.price.rental.skiBootsPole.junior}/day <br />
            Child (5 & Under): ${state.resort.price.rental.skiBootsPole.child}/day <br />

            <b> Snowboards & Boots Purchase:	Price: </b> <br />
            Adult (18-64)
            ${state.resort.price.rental.snowboardandBoots.adult}/day
            Junior (6-17)/Senior (65+)
            ${state.resort.price.rental.snowboardandBoots.junior}/day
            Child (5 & Under)
            ${state.resort.price.rental.snowboardandBoots.child}/day <br />

            <b> Helmets Purchase:	Price: </b> <br />
            Helmets (All ages)
            ${state.resort.price.rental.helmet}/day <br />

        </p></div>);
    return (
        <div className="tabBox">
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
    )

};

export { ResortInfo, ResortInfoTabBox1, ResortInfoTabBox2 }