import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentList from './studentList'
import NotFound from './notFound'


const Home = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<StudentList />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Home