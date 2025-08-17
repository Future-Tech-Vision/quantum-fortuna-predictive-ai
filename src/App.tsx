import React, { useState, useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navigation';
import WelcomeModule from './components/WelcomeModule';
import IntakeModule from './components/IntakeModule';
import PredictionsModule from './components/PredictionsModule';
import ScheduleModule from './components/ScheduleModule';
import InsightsModule from './components/InsightsModule';
import TrustModule from './components/TrustModule';
import UserPortal from './components/UserPortal';
import AnalysisModule from './components/AnalysisModule';

type ActiveModule = 'welcome' | 'intake' | 'predictions' | 'schedule' | 'insights' | 'trust' | 'portal' | 'analysis';

function App() {
  const [activeModule, setActiveModule] = useState<ActiveModule>('welcome');
  const [selectedLotteries, setSelectedLotteries] = useState<string[]>([
    'mega7', 'easy6', 'lotto_india', 'lotto_uk', 'powerball', 'euromillions', 
    'mega_millions', 'oz_lotto', 'canada_lotto', 'super_lotto', 'lotto_max', 
    'saturday_lotto', 'irish_lotto', 'france_loto', 'spanish_lotto',
    'free_lottery_net', 'uk_free_lottery'
  ]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Background Effects */}
        <div className={`fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40`}></div>
        
        <div className="relative z-10">
          <Navigation activeModule={activeModule} setActiveModule={setActiveModule} />
          
          <main className="container mx-auto px-4 py-8">
            {activeModule === 'welcome' && <WelcomeModule />}
            {activeModule === 'intake' && (
              <IntakeModule 
                selectedLotteries={selectedLotteries}
                setSelectedLotteries={setSelectedLotteries}
              />
            )}
            {activeModule === 'predictions' && (
              <PredictionsModule selectedLotteries={selectedLotteries} />
            )}
            {activeModule === 'schedule' && <ScheduleModule />}
            {activeModule === 'insights' && <InsightsModule />}
            {activeModule === 'trust' && <TrustModule />}
            {activeModule === 'portal' && <UserPortal />}
            {activeModule === 'analysis' && <AnalysisModule />}
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;