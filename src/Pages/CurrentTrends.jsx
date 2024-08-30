import React from 'react'
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import CurrentTrendsTable from '../Components/CurrentTrendsTable';

const CurrentTrends = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-4">
          <h1 className='text-xl font-bold'>Current Trends of Product in Tanzania</h1>
       <div className='mt-12 ml-8 '>
        <CurrentTrendsTable/>
       
       </div>
      </main>
    </div>
  </div>
  )
}

export default CurrentTrends