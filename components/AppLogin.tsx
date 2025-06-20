'use client';

import React, { useState } from 'react';
import LoginPage from './LoginPage';

const AppLogin: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [submitted, setSubmitted] = useState(false);
  const [userUrl, setUserUrl] = useState<string | null>(null);

  const handleLoginSubmit = (url: string) => {
    setUserUrl(url);
    setSubmitted(true);
  };

  return (
    <div className="relative z-10">
      {!submitted ? (
        <LoginPage onSubmit={handleLoginSubmit} />
      ) : (
        children
      )}
    </div>
  );
};

export default AppLogin;