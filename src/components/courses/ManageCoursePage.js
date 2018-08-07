import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from '../courses/CourseForm';

class ManageCoursePage extends React.Component {
    constructor(props,context) {
        super(props,context);

        this.state={
            course: Object.assign({},this.props.course),
            error:{}
        };
    }
  render() {
    return (
        <CourseForm course={this.state.course} allAuthors={[]} errors={this.state.error} 
        />    
    );
  }
}

ManageCoursePage.propTypes ={
    course:PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){
    let course={id:'', watchHref:'',title:'',authorId:'',length:'',category:''};
    return{
        course:state.course
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(courseActions,dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);