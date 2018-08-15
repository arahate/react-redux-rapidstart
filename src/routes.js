import React from 'react';
import  { Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';
import ManageCoursePage from './components/courses/ManageCoursePage';

export default (
    <Route path="/" component ={App}>
        <Route component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="course/:id" component={ManageCoursePage}/>
        <Route path="course" component={ManageCoursePage}/>
        <Route path="courses" component={CoursesPage}/>
    </Route>
);
