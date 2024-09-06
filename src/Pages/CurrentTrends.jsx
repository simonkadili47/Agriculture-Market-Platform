import React from 'react'
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import CurrentTrendsTable from '../Components/CurrentTrendsTable';

const CurrentTrends = () => {
  return (
    <div className="flex flex-col mt-20 min-h-screen bg-gray-100">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-4 ml-64"> 
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
          <h1 className='text-xl font-bold ml-3'> Current Trends in Tanzania</h1>
          </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-4xl overflow-x-auto"> 
        
              <CurrentTrendsTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};


export default CurrentTrends