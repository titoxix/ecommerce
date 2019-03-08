import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import ResultCard from './ResultCard';

class Result extends Component {

    render() {
        return (
            <div className='result'>
                {
                    this.props.items.map(item => {
                        return <Link
                            key={item.id}
                            to={`${this.props.match.url}/${item.id}`}>
                            <ResultCard {...item} key={item.id} />
                        </Link>
                    })
                }
            </div>
        );
    }
}

export default Result;