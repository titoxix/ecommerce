import React from "react"

const ShortDescription = props => {
    return (
        <div className="detail-short-description">
            <p className="detail-short-description-quantity">{`${props.condition} - ${props.sold_quantity} vendidos`}</p>
            <p className="detail-short-description-title"><strong>{props.title}</strong></p>
            <p className="detail-short-description-price">$ {props.price.price}</p>
            <button type="button" className="detail-short-description-button">Comprar</button>
        </div>
    );
}

export default ShortDescription;