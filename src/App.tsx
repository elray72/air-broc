import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { LandingLayout } from './layouts';
import 'sanitize.css';
import './assets/style/style.scss';

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
