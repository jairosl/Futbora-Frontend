import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../components/Home';
import { SignUp } from '../components/SignUp';

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
}
