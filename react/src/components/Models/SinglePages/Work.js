
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Work extends Component {
    constructor() {
        super();
        this.state = { items: [] };
    }

    /* Fetches the data from our database and parses it accordingly */
    componentDidMount(){
        const work_id = parseInt(this.props.match.params.number, 10)

        fetch(`http://api.museumary.me/work/` + work_id)
            .then(result=>result.json())
            .then(items=> {
                this.setState({ items })

                // Fetch Artist
                fetch('http://api.museumary.me/artist/' + items.artist_id)
                    .then(result=>result.json())
                    .then(responseJson=>this.setState({artist: responseJson}))

                // Fetch Venue
                fetch('http://api.museumary.me/venue/' + items.venue_id)
                    .then(result=>result.json())
                    .then(responseJson=>this.setState({venue: responseJson}))

                // Fetch Medium
                fetch('http://api.museumary.me/medium/' + items.medium_id)
                    .then(result=>result.json())
                    .then(responseJson=>this.setState({medium: responseJson}))

                // Fetch ArtType
                fetch('http://api.museumary.me/art_type/' + items.art_type_id)
                    .then(result=>result.json())
                    .then(responseJson=>this.setState({art_type: responseJson}))
            })
    }

    render() {
        const work_obj = this.state.items;
        const artist_obj = this.state.artist;
        const venue_obj = this.state.venue;
        const medium_obj = this.state.medium;
        const art_type_obj = this.state.art_type;

        if(work_obj && artist_obj && venue_obj && medium_obj && art_type_obj) {
            //  Do all React code within this div. 'Work_obj' is the object that
            //  associated with this Work page, you should be able to access it
            //  like any other JSON

            return (
                <div className="Work">
                    <h1>{work_obj.name}</h1>
                    <img src={work_obj.image_url} alt="Loading" className="img-rounded" width="auto" height="450"/><br/><br/>

                    <strong>Artist: </strong>
                    <Link to={'/artists/' + work_obj.artist_id} activeClassName="active">
                        {artist_obj.name}
                    </Link><br/>

                    <strong>ArtType: </strong>
                    <Link to={'/types/' + work_obj.art_type_id} activeClassName="active">
                        {art_type_obj.name}
                    </Link><br/>

                    <strong>Medium: </strong>
                        {medium_obj.name}
                    <br/>

                    <strong>Venue: </strong>
                    <Link to={'/venues/' + work_obj.venue_id} activeClassName="active">
                        {venue_obj.name}
                    </Link><br/>
                </div>
            );
        }
        else {
            return <div className="Work"></div>;
        }
    }
}

export default Work;
