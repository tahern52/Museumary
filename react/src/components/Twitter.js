/*
    Twitter feed for Cooper and Harvard Museums on the Home Page
*/

import React from 'react';
import { Timeline } from 'react-twitter-widgets';

/* Twitter Timeline: give twitter username and displays the twitter feed */
const Twitter = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    {/* Twitter Username: cooperhewitt */}
                    <Timeline
                        dataSource={{sourceType:"profile", screenName:"cooperhewitt"}}
                        options={{username:"cooperhewitt", height:"635", width:"600"}}
                    />
                </div>
                <div className="col-md-6">
                    {/* Twitter Username: harvardartmuseums */}
                    <Timeline
                        dataSource={{sourceType:"profile", screenName:"harvartmuseums"}}
                        options={{username:"harvartmuseums", height:"635", width:"600"}}
                    />
                </div>
            </div>
        </div>
    );
};

export default Twitter;
