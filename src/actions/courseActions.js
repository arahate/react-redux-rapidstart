import courseApi from '../api/mockCourseApi';
import * as types from './actionTypes';

import {beginAjaxCall} from './ajaxStatusActions';


export function loadCoursesSuccess(courses){
    return {type:types.LOAD_COURSES_SUCCESS,courses} ; // returns action object with type property.
                                          // ES6  you can omit if RHS == LHS                   
}

export function updateCourseSuccess(course){
    return {type:types.UPDATE_COURSE_SUCCESS,course} ; // returns action object with type property.
                                          // ES6  you can omit if RHS == LHS                   
}
export function createCourseSuccess(course){
    return {type:types.CREATE_COURSE_SUCCESS,course} ; // returns action object with type property.
                                          // ES6  you can omit if RHS == LHS                   
}

export function loadCourses(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then(courses=>{
            dispatch(loadCoursesSuccess(courses));
        }).catch(error=>{
            throw(error);
        });
    };
}

export function saveCourse(course){
    return function(dispatch, getState){
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then(savedCourse=>{
           course.id? dispatch(updateCourseSuccess(savedCourse)):dispatch(createCourseSuccess(savedCourse));
        }).catch(error=>{
            throw(error);
        });
    };
}


