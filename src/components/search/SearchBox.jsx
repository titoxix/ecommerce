import React from "react"
import { ASSETS_URL } from '../../constants.js'

const SearchBox = props => {
    return (
        <div className="search-box">
            <img src={ASSETS_URL + "/img/Logo_ML.png"} alt=''></img>

            <div className="search-box-input">
                <input className="" type='text' onChange={(event) => { props.handlerChanges(event.target.value) }} />
                <button type="button" onClick={props.search}></button>
            </div>
        </div>
    );
}

export default SearchBox;