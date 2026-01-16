import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { LandingPage } from './views/LandingPage';
import { Onboarding } from './views/Onboarding';
import { Circle } from './views/Circle';
import { Reflection } from './views/Reflection';
import { Sanctuary } from './views/Sanctuary';
import { View, UserContext } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.LANDING);
  
  // Persist user state in session for demo purposes
  const [user, setUser] = useState<UserContext>(() => {
    const saved = sessionStorage.getItem('nafas_user');
    return saved ? JSON.parse(saved) : { onboarded: false };
  });

  useEffect(() => {
    sessionStorage.setItem('nafas_user', JSON.stringify(user));
  }, [user]);

  const handleEnter = () => {
    if (user.onboarded) {
      setCurrentView(View.CIRCLE);
    } else {
      setCurrentView(View.ONBOARDING);
    }
  };

  const handleOnboardingComplete = (newUserCtx: UserContext) => {
    setUser(newUserCtx);
    setCurrentView(View.CIRCLE);
  };

  const handleLogout = () => {
    setUser({ onboarded: false });
    sessionStorage.removeItem('nafas_user');
    setCurrentView(View.LANDING);
  };

  const renderView = () => {
    switch (currentView) {
      case View.LANDING:
        return <LandingPage onEnter={handleEnter} />;
      case View.ONBOARDING:
        return <Onboarding onComplete={handleOnboardingComplete} />;
      case View.CIRCLE:
        return <Circle />;
      case View.REFLECTION:
        return <Reflection user={user} onComplete={() => setCurrentView(View.CIRCLE)} />;
      case View.SANCTUARY:
        return <Sanctuary />;
      default:
        return <LandingPage onEnter={handleEnter} />;
    }
  };

  return (
    <Layout 
      currentView={currentView} 
      user={user}
      onNavigate={setCurrentView}
      onLogout={handleLogout}
    >
      {renderView()}
    </Layout>
  );
};

export default App;