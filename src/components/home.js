import React, { Component } from 'react';
import UpcomingCompetitions from "./upcoming-competitions";

export default class Home extends Component {
    render() {
        return (
            <div className='menu'>
                <div id='menu-bar' className='container _element container-1'></div>
                <button className="_button-1">HOME</button>
                <button className="_button-2">PERSONS</button>
                <button className="_button-3">CLUBS</button>
                <button className="_button-4">LICENSES</button>
                <button className="_button-5">INSCRIPTION</button>
                <button className="_button-6">RESULTS</button>
                <button className="_button-7" type="button">LOGIN</button>

                <UpcomingCompetitions />
            </div>
        )
    }
}