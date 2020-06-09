package com.dzone.springBootReactCRUD.service;

import com.dzone.springBootReactCRUD.domain.Course;
import com.dzone.springBootReactCRUD.repository.CourseRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@Slf4j
public class InitializeCourseListsService {

    @Bean
    CommandLineRunner initDatabase(CourseRepository repository){
        return args -> {
            log.info("Preloading : " + repository.save(new Course(1L,"in28minutes",
                    "Learn Full stack with Spring Boot and Angular")));
            log.info("Preloading : " + repository.save(new Course(2L,"in28minutes",
                    "Learn Full stack with Spring Boot and React")));
            log.info("Preloading : " + repository.save(new Course(3L,"in28minutes",
                    "Master Microservices with Spring Boot and Spring Cloud")));
            log.info("Preloading : " + repository.save(new Course(4L,"in28minutes",
                    "Deploy Spring Boot Microservices to Cloud with Docker and Kubernetes")));
        };
    }

}
