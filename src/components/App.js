import React, { PropTypes}  from 'react';
import Header from './common/Header';

class App extends React.Component {
    render() {
        return (
           <div className="container-fluid">
               <Header/>
               {this.props.children} 
           </div>
        );
    }
}

//{this.props.children} are components passed to App component as children by react router.

App.propTypes= {
    children: PropTypes.object.isRequired
};

export default App;