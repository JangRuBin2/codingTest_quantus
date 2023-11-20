// Main.tsx
import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
  <div className='css-ov1ktg'>
    <div className='css-boa882'></div>
    <div className='css-1v1xjc8'>
      <div className='css-10000pf'>
        <div className='css-1hkbw9e'></div>
      </div>
      {children}
    </div>
    <div className='css-boa882'></div>
  </div>
    );
}

export default Main;
