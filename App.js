import React, { useState, useEffect } from 'react';
import courseData from './data.json'; // Import your JSON file

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    // Instead of fetching data from an API, use the data from your JSON file
    setCourses(courseData);
    setFilteredCourses(courseData);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter courses based on search term
    const filtered = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(term) ||
        course.Description.toLowerCase().includes(term) ||
        course.instructor.toLowerCase().includes(term) // Add instructor search if needed
    );
    setFilteredCourses(filtered);
  };

  const handleCourseClick = (course) => {
    // Add logic to navigate to the course details page
    console.log('Clicked on course:', course);
  };

  return (
    <div>
      <h1 style={{ paddingLeft: '20px' }}>Course List</h1>
      <input
        type="text"
        placeholder="Search by course name or instructor"
        value={searchTerm}
        onChange={handleSearch}
        style={{ width: '300px', padding: '8px' }}
      />
      <ul>
        {filteredCourses.map((course) => (
          <li key={course.id} onClick={() => handleCourseClick(course)}>
            <h3>{course.title}</h3>
            <p>{course.Decription}</p>
            <p>Instructor: {course.instructor}</p>
            <p>Enrollment status: {course.EnrollmentStatus}</p>
            <p>Course duration: {course.CourseDuration}</p>
            <p>Schedule: {course.Schedule}</p>
            <p>Location: {course.Location}</p>
            <p>PreRequisites: {course.PreRequisites}</p>
            <a href="https://`{course.title}`:3000" style={{textDecoration:'none'}}>Link : {course.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
