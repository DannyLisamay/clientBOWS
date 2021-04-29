// Resort component 
import React from 'react'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Tab, Tabs } from 'react-bootstrap';
// WeatherWidget component 
import WeatherWidget from './WeatherWidget';
// Hook returns location of object.
import { useLocation } from "react-router-dom";
// Import all images
const images = require.context("./images/", true);

const ResortInfo = (props) => {
    const { state } = useLocation();
    console.log(state);
    // Image path
    const resortIMG = images("./" + state.resort.img).default;
    return (
        <div>
            <Row>
                <h4>{state.resort.name}</h4>
            </Row>
            <Row>
                <a href={state.resort.link}> {state.resort.link} </a>
            </Row>
            <Row>
                <img src={resortIMG} alt="resortImg" style={{ width: "100%" }} />
            </Row>
        </div>
    )
};

const ResortInfoTabBox1 = () => {
    const { state } = useLocation();
    // Tabs varibles
    var description = (<div>
        <h6>Description</h6>
        <p>{state.resort.description}</p>
    </div>);

    var mountain = (<div>
        <h6>Mountain</h6>
        <p>•Summit Elevation: <br /> </p>
        <p>•Vertical Drop: 1000 ft<br /> </p>
        <p>•Lifts: 8<br /> </p>
        <p>•Trails: 12<br /> </p>
        <p>•Terrain Park: 2<br /> </p>
        <p>•Available Terrains: Beginner, Intermediate, Advanced, Expert<br /> </p>
    </div>);
    var weather = WeatherWidget(state.resort.location.city);

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