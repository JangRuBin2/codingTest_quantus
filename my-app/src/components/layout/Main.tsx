import React, { ReactNode } from 'react';
interface MainProps {
  children?: ReactNode; // children 속성을 선택적으로 설정
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (<>{children}</>)
}

export default Main;
