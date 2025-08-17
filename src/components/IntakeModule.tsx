import React from 'react';
import { Target, CheckCircle } from 'lucide-react';

interface IntakeModuleProps {
  selectedLotteries: string[];
  setSelectedLotteries: (lotteries: string[]) => void;
}

const IntakeModule: React.FC<IntakeModuleProps> = ({ selectedLotteries, setSelectedLotteries }) => {
  const lotteries = [
    { id: 'mega7', name: 'Mega 7', region: 'International', frequency: 'Weekly' },
    { id: 'easy6', name: 'Easy 6', region: 'Regional', frequency: 'Bi-weekly' },
    { id: 'lotto_india', name: 'Lotto India', region: 'India', frequency: 'Daily' },
    { id: 'lotto_uk', name: 'Lotto UK Daily', region: 'United Kingdom', frequency: 'Daily' },
    { id: 'powerball', name: 'Powerball', region: 'USA', frequency: 'Tri-weekly' },
    { id: 'euromillions', name: 'EuroMillions', region: 'Europe', frequency: 'Bi-weekly' },
    { id: 'mega_millions', name: 'Mega Millions', region: 'USA', frequency: 'Bi-weekly' },
    { id: 'oz_lotto', name: 'Oz Lotto', region: 'Australia', frequency: 'Weekly' },
    { id: 'canada_lotto', name: 'Canada Lotto 6/49', region: 'Canada', frequency: 'Tri-weekly' },
    { id: 'super_lotto', name: 'Super Lotto Plus', region: 'California', frequency: 'Bi-weekly' },
    { id: 'lotto_max', name: 'Lotto Max', region: 'Canada', frequency: 'Bi-weekly' },
    { id: 'saturday_lotto', name: 'Saturday Lotto', region: 'Australia', frequency: 'Weekly' },
    { id: 'irish_lotto', name: 'Irish Lotto', region: 'Ireland', frequency: 'Bi-weekly' },
    { id: 'france_loto', name: 'France Loto', region: 'France', frequency: 'Tri-weekly' },
    { id: 'spanish_lotto', name: 'La Primitiva', region: 'Spain', frequency: 'Bi-weekly' },
    { id: 'free_lottery_net', name: 'Free-Lottery.net Daily', region: 'International', frequency: 'Daily' },
    { id: 'uk_free_lottery', name: 'UK Free Lottery', region: 'United Kingdom', frequency: 'Daily' },
  ];

  const handleToggle = (lotteryId: string) => {
    if (selectedLotteries.includes(lotteryId)) {
      setSelectedLotteries(selectedLotteries.filter(id => id !== lotteryId));
    } else {
      setSelectedLotteries([...selectedLotteries, lotteryId]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Target className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2">Lottery Selection & Analysis</h1>
        <p className="text-gray-300">Choose lotteries for predictive analysis and modeling</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {lotteries.map((lottery) => {
          const isSelected = selectedLotteries.includes(lottery.id);
          
          return (
            <div
              key={lottery.id}
              onClick={() => handleToggle(lottery.id)}
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                isSelected
                  ? 'border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/25'
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{lottery.name}</h3>
                {isSelected && <CheckCircle className="w-6 h-6 text-cyan-400" />}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Region:</span>
                  <span className="text-white">{lottery.region}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Frequency:</span>
                  <span className="text-white">{lottery.frequency}</span>
                </div>
              </div>
              
              {isSelected && (
                <div className="mt-4 p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                  <p className="text-sm text-green-300">✓ Active in prediction model</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-blue-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30">
        <h3 className="text-lg font-semibold text-white mb-2">Analysis Summary</h3>
        <p className="text-gray-300">
          {selectedLotteries.length} lotteries selected for predictive modeling. 
          The AI will analyze historical patterns, frequency distributions, and probabilistic outcomes 
          to generate optimized number predictions with confidence scores.
        </p>
      </div>
    </div>
  );
};

export default IntakeModule;