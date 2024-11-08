// VisitorCounter.js
import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const incrementVisitorCount = () => {
      // Get the stored visitor count from localStorage
      const storedCount = localStorage.getItem('visitorCount');
      const initialCount = storedCount ? parseInt(storedCount, 10) : 0;

      // Increment the count by 1
      const newCount = initialCount + 1;
      setCount(newCount);
      localStorage.setItem('visitorCount', newCount);
    };

    incrementVisitorCount();
  }, []);  // Empty dependency array ensures this only runs once on mount

  return (
    <div className="bg-[#fcbf4e] p-6 shadow-md text-center max-w-full mx-auto">
      <h2 className="text-2xl font-bold text-[#262626] gradient-text animate-gradient ">Visitor Counter</h2>
      <p className="text-4xl font-semibold text-[#262626] mt-2 animate-gradient gradient-text   ">{count}</p>
    </div>
  );
};

export default VisitorCounter;
