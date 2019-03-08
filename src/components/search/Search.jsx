import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateSearchInformation } from '../../redux/search/actions.js'

import SearchBox from './SearchBox';

class Search extends Component {
    state = {
        query: ""
    };

    render() {
        return (
            <div className="search">
                <SearchBox
                    handlerChanges={(data) => { this.setState({ query: data }) }}
                    search={() => {
                        this.props.updateSearchInformation(this.state.query).then(result => {
                            this.props.history.push({
                                pathname: "/items",
                                search: `?search=${this.state.query}`,
                            });
                        })
                    }}
                />
            </div>
        );
    }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {
    updateSearchInformation,
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Search))
