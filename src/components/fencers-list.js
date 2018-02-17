import React, {Component} from 'react';

export default class FencersList extends Component {

    render() {
        return (
            <div>
                <p className="text text-2">Persons</p>
                <div id="filter_Box" className="container _container container-2 clearfix">
                    <p className="text text-3">Filter</p>
                    <div className="wrapper wrapper-1">
                        <form>
                            <select name="Age Division">
                                <option value="" selected>Age Division</option>
                                <option>Under 10</option>
                                <option>Under 16</option>
                                <option>Under 20</option>
                            </select>
                        </form>
                    </div>
                    <div className="wrapper wrapper-2">
                        <form>
                            <select name="Blade">
                                <option>Blade</option>
                                <option>Epee</option>
                                <option>Foil</option>
                                <option>Sabre</option>
                            </select>
                        </form>
                    </div>
                    <input className="_input" name="Search Bar" type="search"/>
                    <button className="_button _button-6">Submit</button>
                </div>
                <div id="event_Container" className="container _container container-3 clearfix js-latest1">
                    <div onClick="window.location='to event page';" id="event_Photo" className="wrapper wrapper-3">
                        <iframe width="100%" height="100%" src=""></iframe>
                    </div>
                    <p className="text text-4">JIMENEZ</p>
                    <p className="text text-5">Maria Gabrielle</p>
                    <p className="text text-6">Age</p>
                    <p className="text text-7">Birthdate</p>
                    <p className="text text-8">Blade</p>
                    <p className="text text-9">License #</p>
                </div>
                <div id="event_Container" className="container _container container-4 clearfix js-latest1">
                    <div onClick="window.location='to event page';" id="event_Photo" className="wrapper wrapper-4">
                        <iframe width="100%" height="100%" src=""></iframe>
                    </div>
                    <p className="text text-10">SURNAME</p>
                    <p className="text text-11">First Name</p>
                    <p className="text text-12">Age</p>
                    <p className="text text-13">Birthdate</p>
                    <p className="text text-14">Blade</p>
                    <p className="text text-15">License #</p>
                </div>
                <div id="event_Container" className="container _container container-5 clearfix js-latest1">
                    <div onClick="window.location='to event page';" id="event_Photo" className="wrapper wrapper-5">
                        <iframe width="100%" height="100%" src=""></iframe>
                    </div>
                    <p className="text text-16">SURNAME</p>
                    <p className="text text-17">First Name</p>
                    <p className="text text-18">Age</p>
                    <p className="text text-19">Birthdate</p>
                    <p className="text text-20">Blade</p>
                    <p className="text text-21">License #</p>
                </div>
                <div id="event_Container" className="container _container container-6 clearfix js-latest1">
                    <div onClick="window.location='to event page';" id="event_Photo" className="wrapper wrapper-6">
                        <iframe width="100%" height="100%" src=""></iframe>
                    </div>
                    <p className="text text-22">SURNAME</p>
                    <p className="text text-23">First Name</p>
                    <p className="text text-24">Age</p>
                    <p className="text text-25">Birthdate</p>
                    <p className="text text-26">Blade</p>
                    <p className="text text-27">License #</p>
                </div>
                <div id="event_Container" className="container _container container-7 clearfix js-latest1">
                    <div onClick="window.location='to event page';" id="event_Photo" className="wrapper wrapper-7">
                        <iframe width="100%" height="100%" src=""></iframe>
                    </div>
                    <p className="text text-28">SURNAME</p>
                    <p className="text text-29">First Name</p>
                    <p className="text text-30">Age</p>
                    <p className="text text-31">Birthdate</p>
                    <p className="text text-32">Blade</p>
                    <p className="text text-33">License #</p>
                </div>
            </div>
        );
    }
}