import React from "react"

const Description = props => {
    return (
        <div className="detail-description">
            <p className="detail-description-title"><strong> Descripción del producto</strong></p>
            <p className="detail-description-body">{props.description}</p>
        </div>
    );
}

export default Description;