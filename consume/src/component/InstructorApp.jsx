import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ListCoursesComponent from "./ListCoursesComponent";
import CourseComponent from "./CourseComponent";

//React Component representing the high-level structure of the application.
// Routing is defined in this file.
//we will make use of react-router-dom to do the Routing between pages
//execute these command :  npm add react-router-dom
class InstructorApp extends React.Component{
    render() {
        return (
            <Router>
                <div>
                    <h1>Instructor Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/courses" exact component={ListCoursesComponent}/>
                        <Route path="/courses/:id" component={CourseComponent}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default InstructorApp