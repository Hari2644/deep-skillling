import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 1, name: "ReactJS", duration: "4 Weeks" },
    { id: 2, name: "NodeJS", duration: "6 Weeks" }
  ];

  return (
    <div>
      <h2>🎓 Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name} - {course.duration}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
