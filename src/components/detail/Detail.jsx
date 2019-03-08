import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateItemDetail } from '../../redux/search/actions.js'
import Picture from './Picture';
import ShortDescription from './ShortDescription'
import Description from './Description'

class Detail extends Component {
    state = {
        item: {},
        isLoading: true,
    }

    componentDidMount = () => {
        const { topicId } = this.props.match.params;
        this.props.updateItemDetail(topicId).then(result => {
            if (result.status === 200) {
                const { item } = result.body.data;
                this.setState({ item, isLoading: false });
            }
        })

    }

    render() {
        const { item, isLoading } = this.state;
        if (isLoading) {
            return <p>Cargando ...</p>;
        }
        return (
            <div className="detail-container" >
                <Picture {...item} />
                <ShortDescription {...item} />
                <Description {...item} />
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    updateItemDetail,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)