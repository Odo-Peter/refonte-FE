import Header from '@/components/Header'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex flex-col p-8 m-4 bg-white h-screen rounded'>
      <Header title='Dashboard overview' category='Dashboard' />
    </div>
  )
}

export default Dashboard