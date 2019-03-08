import React, { Component } from 'react';
import BreadcrumbUI from './BreadcrumbUI'

class Breadcrumb extends Component {

    render() {
        return (
            <BreadcrumbUI categories={this.props.categories} />
        );
    }
}

export default Breadcrumb;

