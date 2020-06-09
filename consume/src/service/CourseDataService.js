import axios from 'axios'

const INSTRUCTOR = 'in28minutes'
const COURSE_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

//Service using axios framework to make the Backend REST API Calls.
//execute these command :  npm add axios
class CourseDataService {

    retrieveAllCourses(name){
        console.log(INSTRUCTOR_API_URL)
        return axios.get(`${INSTRUCTOR_API_URL}/courses`)
    }

    deleteCourse(id){
        return axios.delete(`${INSTRUCTOR_API_URL}/courses/${id}`)
    }

    retrieveCourse(name, id){
        return axios.get(`${INSTRUCTOR_API_URL}/courses/${id}`)
    }

    updateCourse(name, id, course){
        return axios.put(`${INSTRUCTOR_API_URL}/courses/${id}`, course)
    }

    createCourse(name, course){
        return axios.post(`${INSTRUCTOR_API_URL}/courses`, course)
    }


}

export default new CourseDataService();