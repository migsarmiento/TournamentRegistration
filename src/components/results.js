import React, {Component} from 'react';

export default class Results extends Component {
    render() {
        return (
            <div>
                <p className="text text-15">Results</p>
                <div id="event_Container" className="container _container container-5 clearfix js-latest1">
                    <div onClick="window.location='to event page';" id="event_Photo" className="wrapper wrapper-4">
                        <iframe width="100%" height="100%" src=""></iframe>
                    </div>
                    <div className="text text-16">
                        <p>FEBRUARY</p>
                        <p>18</p>
                    </div>
                    <p className="text text-17">National&nbsp;Opens&nbsp;</p>
                    <p className="text text-18">1</p>
                    <p className="text text-19">Athlete A</p>
                    <p className="text text-20">1</p>
                    <p className="text text-21">Athlete B<br/></p>
                    <p className="text text-22">1</p>
                    <p className="text text-23">Athlete C<br/></p>
                    <p className="text text-24">1</p>
                    <p className="text text-25">Athlete D<br/></p>
                </div>
                <div id="event_Container" className="container _container container-6 clearfix js-latest1">
                    <div onClick="window.location='to event page';" id="event_Photo" className="wrapper wrapper-5">
                        <iframe width="100%" height="100%" src=""></iframe>
                    </div>
                    <div className="text text-26">
                        <p>FEBRUARY</p>
                        <p>18</p>
                    </div>
                    <p className="text text-27">Competition&nbsp;</p>
                    <p className="text text-28">1</p>
                    <p className="text text-29">Athlete A</p>
                    <p className="text text-30">1</p>
                    <p className="text text-31">Athlete B<br/></p>
                    <p className="text text-32">1</p>
                    <p className="text text-33">Athlete C<br/></p>
                    <p className="text text-34">1</p>
                    <p className="text text-35">Athlete D<br/></p>
                </div>
                <div id="event_Container" className="container _container container-7 clearfix js-latest1">
                    <div onClick="window.location='to event page';" id="event_Photo" className="wrapper wrapper-6">
                        <iframe width="100%" height="100%" src=""></iframe>
                    </div>
                    <div className="text text-36">
                        <p>FEBRUARY</p>
                        <p>18</p>
                    </div>
                    <p className="text text-37">Competition&nbsp;</p>
                    <p className="text text-38">1</p>
                    <p className="text text-39">Athlete A</p>
                    <p className="text text-40">1</p>
                    <p className="text text-41">Athlete B<br/></p>
                    <p className="text text-42">1</p>
                    <p className="text text-43">Athlete C<br/></p>
                    <p className="text text-44">1</p>
                    <p className="text text-45">Athlete D<br/></p>
                </div>
                <button onClick="window.location='competition page';" className="_button _button-7">VIEW RESULTS
                    PAGE<br/></button>
                <img className="image image-5" src={require('./images/Blades copy-203x203.png')} data-rimage
                     data-src={require('./images/Blades copy-203x203.png')}/>
            </div>
        );
    }
}