import React from 'react';

const defaultProps = {
        // page: 1,
        // entries_per_page: 16,
        order_by: "name",
        order: "ascending",
        startswith: "",
        art_type: "",
        medium: "",
        venue: ""
}

class ArtistsFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;

        this.applyFilter = this.applyFilter.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    applyFilter(event) {
        if(event.target.name === 'Reset')
            this.props.applyFilter(this.props)
        else
            this.props.applyFilter(this.state)
    }

    handleChange(event) {
        let state = Object.assign({}, this.state);
        state[event.target.name] = event.target.value;

        this.setState(state)
    }

    render() {
        return (
            <div className="container">
                {"Starts With: "}
                <input
                    type="text"
                    name="startswith"
                    onChange={this.handleChange}
                />
                <label>
                Culture
                </label>
                <input
                    type="text"
                    name="culture"
                    onChange={this.handleChange}
                />
                {"Order By: "}
                <select
                    name="order_by"
                    value={this.state.order_by}
                    onChange={this.handleChange}>
                    <option value="name"> Name </option>
                    <option value="id"> ID </option>
                </select>
                {"\t\tOrder:  "}
                <select
                    name="order"
                    value={this.state.order}
                    onChange={this.handleChange}>
                    <option value="ascending"> Ascending </option>
                    <option value="descending"> Descending </option>
                </select>
                <button
                    type="button"
                    name="Apply"
                    onClick={this.applyFilter} >
                    {"Apply Filter"}
                </button>
                <button
                    type="button"
                    name="Reset"
                    onClick={this.applyFilter} >
                    {"Reset"}
                </button>
                <br/>
                <br/>
            </div>
        );
    }
}

ArtistsFilter.defaultProps = defaultProps;

export default ArtistsFilter;