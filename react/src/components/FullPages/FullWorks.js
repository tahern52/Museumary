import React from 'react';

import Page from 'components/Page'
import Pagination from 'components/Pagination'

import { WorksFilter } from 'components/Filters'

const defaultProps = {
    defaultParams: {
        page: 1,
        entries_per_page: 16,
        order_by: "name",
        order: "ascending",
        startswith: "",
        art_type: "",
        medium: "",
        venue: ""
    },

    attributes: {
        name: "Name",
        date: "Date"
    },

    base_url: 'http://api.museumary.me/work/?',
    instance_url: '/works/'
}

class FullWorks extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            info: {},
            items: [],
            params: props.defaultParams,
            numPages: 0
        };

        this.changePage = this.changePage.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
    }

    componentDidMount() {
        /* change for dynamic loading */

        this.loadPage(this.props.defaultParams)
    }

    changePage(pageNumber) {
        if(pageNumber !== this.state.params.page) {
            let params = Object.assign({}, this.state.params);
            params.page = pageNumber;

            this.loadPage(params)
        }
    }

    applyFilter(newParams) {
        let _newParams = {}; // Object.assign({}, this.props.defaultParams)
        const currParams = this.state.params;

        for(const key in this.props.defaultParams) {
            if(newParams.hasOwnProperty(key) && currParams[key] !== newParams[key]) {
                _newParams[key] = newParams[key];
            }
        }

        if(_newParams) {
            _newParams = Object.assign({}, this.props.defaultParams, _newParams)
            this.loadPage(_newParams)
        }
    }


    componentWillReceiveProps(nextProps) {
        const params = this.props.params
        const nextParams = nextProps.params

        for(const key in params) {
            if(params[key] !== nextParams[key]) {
                return this.loadPage(nextParams)
            }
        }
    }

    loadPage(params) {
        let arr = []
        for(const key in params) {
            arr.push(key+'='+params[key])
        }

        fetch(this.props.base_url+arr.join('&'))
            .then(result=>result.json())
            .then(items=> {
                this.loadItems(items.objects, items.info.num_pages, params)
            })
    }

    loadItems(items, numPages, params) {
        const instance_url = this.props.instance_url;

        const parsedItems = items.map(item => {
            let { venue, artist } = item;

            item.url = instance_url + item.id;
            item.name = item.name.slice(0, 25) + (item.name.length > 25 ? '...' : '');

            venue = venue.slice(0, 7);
            artist = artist.slice(0, 7) + (artist.length > 7 ? '...' : '')
            item.details = ['Artist: ' + artist, 'Date: ' + item.date, "Venue: " + venue];

            return item;
        })

        this.setState({ items: parsedItems, numPages: numPages, params: params })
    }

    render() {
        return (
            <div className="FullWorks">
                <WorksFilter
                    {...this.props}
                    applyFilter={this.applyFilter}
                />
                <Page items={this.state.items} />
                <br/>
                 <Pagination
                    page={this.state.params.page}
                    numPages={this.state.numPages}
                    changePage={this.changePage}
                />
            </div>
        );
    }
}

FullWorks.defaultProps = defaultProps;

export default FullWorks;
