// CourseDetails.js - Course Details Component
import React from 'react';
import './styles.css';

function CourseDetails({ course, onSelect }) {
    return (
        <div className="card course-card" onClick={() => onSelect(course)}>
            <div className="course-header">
                <h3 className="card-title">{course.title}</h3>
                <span className="level-badge">{course.level}</span>
            </div>
            <p className="course-instructor">👨‍🏫 {course.instructor}</p>
            <div className="course-meta">
                <span>⏱️ {course.duration}</span>
                <span>💰 {course.price}</span>
            </div>
            <div className="course-stats">
                <span>👥 {course.students} students</span>
                <span>⭐ {course.rating}/5</span>
            </div>
            <div className="course-topics">
                {course.topics.map((topic, index) => (
                    <span key={index} className="topic-tag">{topic}</span>
                ))}
            </div>
        </div>
    );
}

export default CourseDetails;