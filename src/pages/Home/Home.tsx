import React from 'react';
import clsx from 'clsx';
import './_home.scss';

interface IHome {
  className?: string;
}

const Home: React.FC<IHome> = ({ className }) => {
  return (
    <div className={clsx(className, 'home')}>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
