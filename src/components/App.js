import React, { PropTypes}  from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
           <div className="container-fluid">
               <Header loading={this.props.loading} />
               {this.props.children} 
           </div>
        );
    }
}

//{this.props.children} are components passed to App component as children by react router.

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.ajaxCallInProgress>0
    };
};

App.propTypes= {
    children: PropTypes.object.isRequired,
    loading:PropTypes.bool.isRequired
};


export default connect(mapStateToProps)(App);