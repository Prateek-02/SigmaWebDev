import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate();
  function reports(){
    navigate('reports')
  }
  function mockTest(){
    navigate('mock-test')
  }
  function courses(){
    navigate('courses')
  }
  return (
    <div>
      Dashboard Page
      <button onClick={reports}>Reports page</button>
      <button onClick={mockTest}>Mock Test Page</button>
      <button onClick={courses}>Courses page</button>
      <Outlet/>
    </div>

  )
}

export default Dashboard
