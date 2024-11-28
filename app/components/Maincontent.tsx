
import React from 'react';

const MainContent = () => {
  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-2">
        <div className="bg-blue-500 p-8 rounded-lg shadow-lg min-h-[200px]">
          <h2 className="text-2xl text-white font-bold">Main Section</h2>
          <p className="text-white mt-4">Full width content area</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-500 p-8 rounded-lg shadow-lg min-h-[200px]">
            <h2 className="text-2xl text-white font-bold">Left Section</h2>
            <p className="text-white mt-4">Half width content</p>
          </div>
          
          <div className="bg-violet-500 p-8 rounded-lg shadow-lg min-h-[200px]">
            <h2 className="text-2xl text-white font-bold">Right Section</h2>
            <p className="text-white mt-4">Half width content</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
