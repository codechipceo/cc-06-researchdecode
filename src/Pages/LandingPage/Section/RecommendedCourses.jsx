import React from 'react'
import "./RecommendedCourses.scss"
import { Panel } from 'rsuite';
import CourseCard from "../../../Components/CourseCard/CourseCardOne"
const RecommendedCourses = () => {

  const sampleCourses = [
  {
    _id: 1,
    title: 'AWS Certified Solutions Architect',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ',
    category: 'Design',
    duration: '3 Months',
    instructor: {
      name: 'Lina',
      avatar: 'https://via.placeholder.com/50'  // Placeholder avatar
    },
    originalPrice: 100,
    discountedPrice: 80,
    thumbnailUrl: 'https://via.placeholder.com/150'  // Placeholder image
  },
  {
    _id: 2,
    title: 'React - The Complete Guide',
    description: 'Learn how to build powerful single-page applications with React ',
    category: 'Development',
    duration: '2 Months',
    instructor: {
      name: 'Mark',
      avatar: 'https://via.placeholder.com/50'
    },
    originalPrice: 120,
    discountedPrice: 100,
    thumbnailUrl: 'https://via.placeholder.com/150'
  },
  {
    _id: 3,
    title: 'Digital Marketing Fundamentals',
    description: 'An introductory course to digital marketing covering SEO, SEM, and social media',
    category: 'Marketing',
    duration: '1 Month',
    instructor: {
      name: 'Alice',
      avatar: 'https://via.placeholder.com/50'
    },
    originalPrice: 60,
    discountedPrice: 50,
    thumbnailUrl: 'https://via.placeholder.com/150'
  },
  {
    _id: 4,
    title: 'Data Analysis with Python',
    description: 'Analyze and visualize data with Python libraries like Pandas and Matplotlib',
    category: 'Data Science',
    duration: '4 Months',
    instructor: {
      name: 'James',
      avatar: 'https://via.placeholder.com/50'
    },
    originalPrice: 140,
    discountedPrice: 120,
    thumbnailUrl: 'https://via.placeholder.com/150'
  },
  {
    _id: 5,
    title: 'Introduction to Project Management',
    description: 'Understand the basics of project management and how to apply best practices',
    category: 'Business',
    duration: '3 Weeks',
    instructor: {
      name: 'Sara',
      avatar: 'https://via.placeholder.com/50'
    },
    originalPrice: 90,
    discountedPrice: 70,
    thumbnailUrl: 'https://via.placeholder.com/150'
  }
];

  return (
    <Panel className="recommended-courses">
      <div className="recommended-header">
        <h2>Recommended for you</h2>
        <a href="courses" className="see-all">
          See all
          <i className="rs-icon rs-icon-chevron-right"></i>
        </a>
      </div>
      
      <div className="courses-container">
        {sampleCourses.map(course => (
          <CourseCard 
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </Panel>
  )
}

export default RecommendedCourses 
