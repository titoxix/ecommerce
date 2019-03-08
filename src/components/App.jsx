import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getSearchInformation } from '../redux/search/selector';

/* Components */
import Search from './search/Search';
import Breadcrumb from './breadcrumb/Breadcrumb'
import Result from './result/Result'
import Detail from './detail/Detail'


class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div className="search-container">
            <Route path="/" component={Search} />
          </div>
          <div className="breadcrumb-container">
            <Route exact path="/items" render={() => (<Breadcrumb categories={this.props.searchInformation.categories} />)} />
          </div>
          <div className="result-container">
            <Route exact path="/items" render={(props) => (<Result items={this.props.searchInformation.items} {...props} />)} />
            <Route exact path="/items/:topicId" render={(props) => (<Detail {...props} />)} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  searchInformation: getSearchInformation(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
