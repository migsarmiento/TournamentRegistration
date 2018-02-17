import React, { Component } from 'react';

export default class NotificationBar extends Component {

    render() {
        return (
            <div id="notification_Bar" className="container _container container-1 clearfix">
                <p className="text text-1">PURCHASE 2018 LICENSE</p>
                <button className="_button">VISIT LICENSES</button>
                <img className="image" src={require('./images/PFA Web Icons-03-94x94.png')} data-rimage data-src={require('./images/PFA Web Icons-03-94x94.png')} />
            </div>
        );
    }
}