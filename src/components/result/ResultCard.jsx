import React from "react"
import { ASSETS_URL } from '../../constants.js'

const ResultCard = props => {
    return (
        <div className="result-card">
            <img className="result-card-picture" src={props.picture} alt=''></img>
            <div className="short-description">
                <p className="short-description-price">$ {props.price.price}
                    <span style={{ display: props.free_shipping ? 'inline' : 'none' }}>
                        <img src={ASSETS_URL + "/img/ic_shipping.png"} alt=''></img>
                    </span>
                </p>
                <p className="short-description-title">{props.title} Completo Unico!</p>
            </div>
            <div className="result-card-origin">
                <p>Capital Federeal</p>
            </div>
            <hr></hr>
        </div>
    );
}

export default ResultCard;