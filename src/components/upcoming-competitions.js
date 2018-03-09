import React, { Component } from 'react';

export default class UpcomingCompetitions extends Component {
    render() {
        return (
            <div>
                <p className="text text-2">Upcoming Competitions</p>
                <div id="event_Container" className="container _container container-2 clearfix js-latest1">
                    <div onClick="window.location='to event page';" id="event_Photo" className="wrapper wrapper-1"><iframe width="100%" height="100%" src=""></iframe></div>
                    <div className="text text-3">
                        <p>FEBRUARY</p>
                        <p>18</p>
                    </div>
                    <p className="text text-4">National&nbsp;Opens&nbsp;</p>
                    <p className="text text-5">PhilSports Fencing Hall</p>
                    <p className="text text-6">Open&nbsp;to all ages, all blades</p>
                </div>
                <div id="event_Container" className="container _container container-3 clearfix js-latest2">
                    <div onClick="window.location='to event page';" id="event_Photo" className="wrapper wrapper-2"><iframe width="100%" height="100%" src=""></iframe></div>
                    <div className="text text-7">
                        <p>FEBRUARY</p>
                        <p>18</p>
                    </div>
                    <p className="text text-8">Competition Title</p>
                    <p className="text text-9">Venue</p>
                    <p className="text text-10">Age division/blade event</p>
                </div>
                <div id="event_Container" className="container _container container-4 clearfix js-latest2">
                    <div onClick="window.location='to event page';" id="event_Photo" className="wrapper wrapper-3"><iframe width="100%" height="100%" src=""></iframe></div>
                    <div className="text text-11">
                        <p>FEBRUARY</p>
                        <p>18</p>
                    </div>
                    <p className="text text-12">Competition Title</p>
                    <p className="text text-13">Venue</p>
                    <p className="text text-14">Age division/blade event</p>
                </div>
                <div onClick="window.location='competition page';">
                    <button className="_button _button-6">VIEW COMPETITION LIST</button><br />
                    <img className="image image-4" src={require('./images/Blades copy-203x203-1.png')} data-rimage data-src={require('./images/Blades copy-203x203-1.png')} />
                </div>
            </div>
        );
    }
}