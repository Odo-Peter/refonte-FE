import Header from '@/components/Header'
import React from 'react'

const Bar = () => {
  return (
    <div className='flex flex-col p-8 m-4 bg-white h-screen rounded'>
      <Header title='Bar overview' category='Bar' />
    </div>
  )
}

export default Bar