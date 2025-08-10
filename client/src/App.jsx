import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import CourseDetails from './pages/student/CourseDetails'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourses from './pages/educator/AddCourses'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'
import Navbar from './components/student/Navbar'

function App() {
  const isEducatorRoute = useMatch('/educator/*');
  return (
    
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute &&  <Navbar/> }
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coursesList/:input" element={<CoursesList />} />
        <Route path="/myEnrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/coursesDetails/:id" element={<CourseDetails />} />



        <Route path="/educator" element={<Educator />}>
          <Route path="add_courses" element={<AddCourses />} />
          <Route path="my_courses" element={<MyCourses />} />
          <Route path="student_Enrolled" element={<StudentsEnrolled />} />
          <Route path="dashboard" element={<Dashboard />} />
       


        </Route>


      </Routes>
    </div>
  )
}

export default App