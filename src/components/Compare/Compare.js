// Resort component 
import React from 'react'
import { Link } from 'react-router-dom';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Table } from 'react-bootstrap';
// Example resorts... will pull real data from backend/database
var resorts = [
    { name: "Pats Peak", distance: "42 mi", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "$100", rating: "5" },
    { name: "Wachusetts", distance: "30 mi", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "$60", rating: "4.5" },
    { name: "Nashoba", distance: "22 mi", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "$50", rating: "4.1" }
];

// Map for list resorts 
const listResorts = resorts.map((r) => (
    <tr key={r.name}>
        <td><Link to="/resort"><b>{r.name}</b></Link></td>
        <td>{r.distance}</td>
        <td>{r.description}</td>
        <td>{r.rating}</td>
        <td>{r.price}</td>
        <td><input type="checkbox"></input></td>
    </tr>
));

const SortBy = () => {
    return (
        <div className="sortBy">
            <Dropdown>
                <label class="lblSortBy">SortBy: </label>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Select
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Distance</Dropdown.Item>
                    <Dropdown.Item href="#">Price</Dropdown.Item>
                    <Dropdown.Item href="#">Review</Dropdown.Item>
                </Dropdown.Menu>
                <div class="float-right">
                    <label class="lblCompare">Select Three Resorts: </label>
                    <button class="btnCompare btn btn-light">Compare</button>
                </div>
            </Dropdown>
        </div>
    )
};

const ResortList = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Distance</th>
                    <th>Description</th>
                    <th>Review</th>
                    <th>Price</th>
                    <th>Select</th>
                </tr>
            </thead>
            <tbody>
                {listResorts}
            </tbody>
        </Table>
    )
};

export { SortBy, ResortList }