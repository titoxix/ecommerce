import React from "react"

const BreadcrumbUI = props => {
    return (
        <p>{props.categories.join(' > ')}</p>
    );
}

export default BreadcrumbUI;