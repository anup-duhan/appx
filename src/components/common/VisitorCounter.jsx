// VisitorCounter.js
import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Check if the user has already visited
    const hasVisited = localStorage.getItem('hasVisited');

    // Only increment the count if this is the user's first visit
    if (!hasVisited) {
      const storedCount = localStorage.getItem('visitorCount');
      const initialCount = storedCount ? parseInt(storedCount, 10) : 0;

      // Increment the count and save it
      const newCount = initialCount + 1;
      setCount(newCount);
      localStorage.setItem('visitorCount', newCount);

      // Set the hasVisited flag to prevent future increments
      localStorage.setItem('hasVisited', 'true');
    } else {
      // If the user has visited before, just load the existing count
      const storedCount = localStorage.getItem('visitorCount');
      setCount(storedCount ? parseInt(storedCount, 10) : 0);
    }
  }, []);

  return (
    <div className="bg-[#fcbf4e] p-6 shadow-md text-center max-w-full mx-auto">
    <h2 className="text-2xl font-bold text-[#262626;]">Visitor Counter</h2>
    <p className="text-4xl font-semibold text-[#262626;] mt-2">{count}</p>
  </div>
  );
};

export default VisitorCounter;
