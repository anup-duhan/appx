// TypewriterComponent.tsx
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

interface TypewriterComponentProps {
  words: string[];
}

const TypewriterComponent: React.FC<TypewriterComponentProps> = ({ words }) => {
  return (
    <p>
      <Typewriter
        words={words}
        loop={0} // Set to 0 for infinite loop
        cursor
        // cursorStyle={<span style={{ color: 'blue', fontSize: '2rem', fontWeight: 'bold' }}>|</span>}
        typeSpeed={200}
        deleteSpeed={100}
        delaySpeed={1500}
      />
    </p>
  );
};

export default TypewriterComponent;
