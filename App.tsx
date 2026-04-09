/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Quran from './components/Quran';
import Duas from './components/Duas';
import { Screen } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home onNavigate={setCurrentScreen} />;
      case 'quran':
        return <Quran onBack={() => setCurrentScreen('home')} />;
      case 'duas':
        return <Duas onBack={() => setCurrentScreen('home')} />;
      default:
        return <Home onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <Layout currentScreen={currentScreen} onScreenChange={setCurrentScreen}>
      {renderScreen()}
    </Layout>
  );
}
