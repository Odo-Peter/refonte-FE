import Header from '@/components/Header'
import React from 'react'

const Calendar = () => {
  return (
    <div className='flex flex-col p-8 m-4 bg-white h-screen rounded'>
      <Header title='Calendar overview' category='Calendar' />
    </div>
  )
}

export default Calendar