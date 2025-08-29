import React, { useState, useEffect } from 'react';
import { Brain, Target, ChevronDown, ChevronUp } from 'lucide-react';

interface PredictionData {
  name: string;
  numbers: number[];
  confidence: number;
  notes?: string;
}

interface PredictionsModuleProps {
  selectedLotteries: string[];
}

const PredictionsModule: React.FC<PredictionsModuleProps> = ({ selectedLotteries }) => {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  // Example predictions object — replace with your actual data source
  const predictions: Record<string, PredictionData> = {
    emirates_mega7: {
      name: 'Emirates Draw MEGA7',
      numbers: [8, 14, 22, 29, 35, 41, 47],
      confidence: 99.1,
      notes: 'Perfect pattern alignment with quantum neural network v5.3'
    },
    emirates_easy6: {
      name: 'Emirates Draw EASY6',
      numbers: [3, 11, 18, 25, 32, 39],
      confidence: 97.8,
      notes: 'High confidence based on bi-weekly frequency analysis'
    },
    emirates_fast5: {
      name: 'Emirates Draw FAST5',
      numbers: [7, 15, 23, 31, 44],
      confidence: 96.2,
      notes: 'Daily pattern optimization with rapid prediction algorithm'
    },
    omillionaire: {
      name: 'Omillionaire',
      numbers: [5, 12, 19, 26, 33, 40, 47],
      confidence: 98.4,
      notes: 'Premium lottery algorithm with enhanced accuracy'
    },
    lotto_india: {
      name: 'Lotto India',
      numbers: [9, 16, 23, 30, 37, 44],
      confidence: 98.1,
      notes: 'Daily draw optimization with ensemble AI v5.4'
    },
    powerball_usa: {
      name: 'Powerball USA',
      numbers: [7, 21, 34, 48, 62],
      confidence: 96.3,
      notes: 'Multi-state lottery with quantum boost algorithm'
    },
    euromillions: {
      name: 'EuroMillions',
      numbers: [4, 17, 28, 39, 50],
      confidence: 97.9,
      notes: 'European lottery with Lucky Stars optimization'
    },
    lottery_co_uk: {
      name: 'Lottery.co.uk Free',
      numbers: [2, 9, 16, 23, 30, 37],
      confidence: 95.8,
      notes: 'Free platform algorithm with enhanced accuracy'
    },
    uk_free_lottery: {
      name: 'UK Free Lottery Weekly',
      numbers: [6, 13, 20, 27, 34, 41],
      confidence: 96.4,
      notes: 'Weekly pattern analysis with consistent performance'
    }
  };

  useEffect(() => {
    if (selectedLotteries.length === 0) {
      // Parent handles default selection
    }
  }, [selectedLotteries]);

  const toggleCard = (lotteryId: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(lotteryId)) {
      newExpanded.delete(lotteryId);
    } else {
      newExpanded.add(lotteryId);
    }
    setExpandedCards(newExpanded);
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-400';
    if (confidence >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <Brain className="w-16 h-16 text-purple-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2">Predictive Analysis</h1>
        <p className="text-gray-300">
          AI-generated lottery predictions with confidence metrics
        </p>
      </div>

      {/* Predictions Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {selectedLotteries.map((lotteryId) => {
          const data = predictions[lotteryId];
          if (!data) return null;

          const isExpanded = expandedCards.has(lotteryId);

          return (
            <div
              key={lotteryId}
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="p-6">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{data.name}</h3>
                  <button
                    onClick={() => toggleCard(lotteryId)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>

                {/* Confidence Metric */}
                <div className={`mb-4 font-semibold ${getConfidenceColor(data.confidence)}`}>
                  Confidence: {data.confidence}%
                </div>

                {/* Predicted Numbers */}
                {isExpanded && (
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {data.numbers.map((num) => (
                        <span
                          key={num}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                        >
                          {num}
                        </span>
                      ))}
                    </div>
                    {data.notes && (
                      <p className="text-gray-400 text-sm">{data.notes}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {selectedLotteries.length === 0 && (
        <div className="text-center py-12">
          <Target className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">
            No Lotteries Selected
          </h3>
          <p className="text-gray-500">
            Visit the Intake module to select lotteries for analysis
          </p>
        </div>
      )}
    </div>
  );
};

export default PredictionsModule;
