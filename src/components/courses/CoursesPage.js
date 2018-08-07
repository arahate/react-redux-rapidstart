import React, { Component , PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends Component {
    constructor(props,context) {
        super(props,context);
    }
    
    render() {
        const courses= this.props.courses;
        return (
            <div className="jumbotron">
                <h1>Courses</h1>
                <CourseList courses = {courses}/>
            </div>
        );
    }
}

CoursesPage.propTypes ={
    actions:PropTypes.object.isRequired,
    courses:PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps){
    return{
        courses:state.courses
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(courseActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);