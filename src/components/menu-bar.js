import React, { Component } from 'react';


export default class MenuBar extends Component {

    render() {
        return (
            <div>
                <img className="image image-1" src={require('./images/Home-01-25x25.png')} data-rimage data-src={require('./images/Home-01-25x25.png')} />
                <button id="Persons" className="_button _button-1">PERSONS</button>
                <button id="Licenses" className="_button _button-2">LICENSES</button>
                <button className="_button _button-3">COMPETITIONS</button>
                <button id="Results" className="_button _button-4">RESULTS</button>
                <img className="image image-2" src={require('./images/PFA Web Icons-03-25x25-1.png')} data-rimage data-src={require('./images/PFA Web Icons-03-25x25-1.png')} />
            </div>
        );
    }
}