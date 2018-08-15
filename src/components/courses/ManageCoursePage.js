import React from 'react';
import PropTypes from 'prop-types';
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
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.course.id!=nextProps.course.id ){
            this.setState({course:Object.assign({},nextProps.course)});
        }
    }
    
    updateCourseState(event){
        const field = event.target.name;
        let course = this.state.course;
        course[field] =event.target.value;
        return this.setState({course:course});
    }

    saveCourse(course){
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        
    }

    redirect(){
        debugger;
        this.context.router.push('/courses');
    }

  render() {
    return (
        <CourseForm course={this.state.course} 
                    allAuthors={this.props.authors} 
                    errors={this.state.error} 
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
        />    
    );
  }
}


ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

ManageCoursePage.contextTypes ={
    router:PropTypes.object
};

function getCourseId(courses, courseId){
    
    const course=courses.filter(course=>course.id==courseId);
    if (course.length){
        return course[0];
    }
    return null;
}

function mapStateToProps(state,ownProps){
    const courseId = ownProps.params.id; // Gets value of param id passed in router.
    let course={id:'', watchHref:'',title:'',authorId:'',length:'',category:''};

    if (courseId && state.courses.length>0){
        course=getCourseId(state.courses,courseId);
    }
    

    const authorsFormattedForDropdown = state.authors.map(author=>{
        return{
            value:  author.id,
            text : author.firstName + ' ' + author.lastName
        };
    });


    return{
        course:course,
        authors:authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(courseActions,dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
  