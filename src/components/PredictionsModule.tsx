import React, { useState } from 'react';
import { Brain, Target, ChevronDown, ChevronUp } from 'lucide-react';

interface PredictionsModuleProps {
  selectedLotteries: string[];
}

const PredictionsModule: React.FC<PredictionsModuleProps> = ({ selectedLotteries }) => {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  // Auto-select all lotteries for comprehensive display
  React.useEffect(() => {
    if (selectedLotteries.length === 0) {
      // This will be handled by the parent component
    }
  }, [selectedLotteries]);

  const predictions = {
    // ... [unchanged predictions object content from your original file]
  };

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
      <div className="text-center mb-8">
        <Brain className="w-16 h-16 text-purple-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2">Predictive Analysis</h1>
        <p className="text-gray-300">AI-generated lottery predictions with confidence metrics</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {selectedLotteries.map((lotteryId) => {
          const data = predictions[lotteryId as keyof typeof predictions];
          if (!data) return null;

          const isExpanded = expandedCards.has(lotteryId);

          return (
            <div
              key={lotteryId}
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{data.name}</h3>
                  <button
                    onClick={() => toggleCard(lotteryId)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>

                {/* Predicted Numbers */}
                {/* ... rest of your original JSX unchanged */}
              </div>
            </div>
          );
        })}
      </div>

      {selectedLotteries.length === 0 && (
        <div className="text-center py-12">
          <Target className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No Lotteries Selected</h3>
          <p className="text-gray-500">Visit the Intake module to select lotteries for analysis</p>
        </div>
      )}

      {/* Comprehensive Predictions Summary */}
      {/* ... rest of your original JSX unchanged */}
    </div>
  );
};

export default PredictionsModule;
