import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
 
const CourseForm = ({course,allAuthors,onSave,onChange,loading,errors}) =>{

    return(
        <form>
            <h2>Add Course</h2>
            <TextInput
            name="title"
            label = "Title"
            value ={course.title}
            onChange={onChange}
            error={errors.title}/>

            <SelectInput
            name="authorId"
            label = "Author"
            value ={course.authorId}
            defaultOption="Select Author"
            options={allAuthors}
            onChange={onChange}
            error={errors.authorId}/>

            <TextInput
            name="category"
            label = "Category"
            value ={course.category}
            onChange={onChange}
            error={errors.category}/>

            <TextInput
            name="length"
            label = "Length"
            value ={course.length}
            onChange={onChange}
            error={errors.length}/>

            <input
            type="submit"
            disabled={loading}
            value={loading? 'Saving...':'Save'}
            className="btn btn-primary"
            onClick={onSave}/>


        </form>
    );
};

CourseForm.propTypes ={
    course: PropTypes.object.isRequired,
    allAuthors :PropTypes.array,
    onSave:PropTypes.func.isRequired,
    onChange:PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
};

export default CourseForm;

