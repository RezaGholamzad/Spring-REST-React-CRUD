import React from "react";
import CourseDataService from "../service/CourseDataService";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const INSTRUCTOR = 'in28minutes'

//React Component for editing Course Details and creating a new course.
//we will make use of formik to create forms
//execute these command :  npm add formik
class CourseComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            description : ``
        }
    }

    componentDidMount() {
        console.log(this.state.id);

        if (this.state.id === "-1"){
            return
        }

        CourseDataService.retrieveCourse(INSTRUCTOR, this.state.id)
            .then(
                response => this.setState(
                    {
                        description : response.data.description
                    }
                )
            )
    }

    onSubmit = (values) => {
        console.log(values)

        let course = {
            id : this.state.id,
            username : INSTRUCTOR,
            description : values.description
        }
        console.log(course)
        if (this.state.id === "-1"){
            CourseDataService.createCourse(INSTRUCTOR, course)
                .then(() => this.props.history.push(`/courses`))
        }else {
            CourseDataService.updateCourse(INSTRUCTOR, this.state.id, course)
                .then(() => this.props.history.push(`/courses`))
        }
    }

    validate = (values) => {
        let errors = {};
        if (!values.description){
            errors.description = 'Enter a Description'
        }else if (values.description.length < 5){
            errors.description = 'Enter atleast 5 Characters in Description'
        }
        return errors;
    }


    render() {
        let {description, id} = this.state;
        return (
            <div>
                <h1>Course Details</h1>
                <div>{id}</div>
                <div>{description}</div>
                <div className="container">
                    <Formik initialValues={{id, description}}
                            onSubmit={this.onSubmit}
                            validateOnBlur={false}
                            validateOnChange={false}
                            validate={this.validate}
                            enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                                  className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default CourseComponent;