package com.dzone.springBootReactCRUD.controller;

import com.dzone.springBootReactCRUD.domain.Course;
import com.dzone.springBootReactCRUD.repository.CourseRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CourseListController {

    private final CourseRepository repository;

    public CourseListController(CourseRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/instructors/{username}/courses")
    public List<Course> getAllCourses(@PathVariable String username) {
        return repository.findAll();
    }

    @GetMapping("/instructors/{username}/courses/{id}")
    public Course getCourse(@PathVariable String username, @PathVariable Long id) throws Exception {
        return repository.findById(id)
                .orElseThrow(() -> new Exception(id + " not found"));
    }

    @PutMapping("/instructors/{username}/courses/{id}")
    public Course updateCourse(@PathVariable String username, @PathVariable String id,
                               @RequestBody Course newCourse){
        return repository.findById(Long.valueOf(id))
                .map(course -> {
                    course.setDescription(newCourse.getDescription());
                    return repository.save(course);
                }).orElseGet(() -> repository.save(newCourse));
    }

    @PostMapping("/instructors/{username}/courses")
    public Course saveNewCourse(@PathVariable String username, @RequestBody Course course){
        return repository.save(course);
    }

    @DeleteMapping("/instructors/{username}/courses/{id}")
    public ResponseEntity<?> deleteCourse(@PathVariable String username, @PathVariable String id){
        if (repository.findById(Long.valueOf(id)).isPresent()){
            repository.deleteById(Long.valueOf(id));
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
