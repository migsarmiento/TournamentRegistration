import React, { Component } from 'react';
import NotificationBar from './notification-bar';
import UpcomingCompetitions from './upcoming-competitions';
import Results from "./results";

export default class Home extends Component {

    onClickLogin() {
        this.setState({
            showActiveFencers: false,
        });
    }

    render() {
        return (
            <div className='body page-home-logged-in clearfix'>
                <NotificationBar />
                <UpcomingCompetitions />
                <Results />
            </div>
        );
    }
}