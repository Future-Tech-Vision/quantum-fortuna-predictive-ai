import React from 'react';
import { Sparkles, Cpu, TrendingUp } from 'lucide-react';

const WelcomeModule: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
          Quantum Fortuna™
        </h1>
        <p className="text-xl text-gray-300 mb-2">Predictive Intelligence for Lottery Success</p>
        <div className="text-sm text-gray-400">
          Current Version: v4.2.1 | Last Sync: August 7, 2025, 09:15 AM IST
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
          <Cpu className="w-12 h-12 text-cyan-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Analysis</h3>
          <p className="text-gray-300">
            Advanced machine learning algorithms analyze historical patterns and probabilistic models for optimized predictions.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
          <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Real-Time Insights</h3>
          <p className="text-gray-300">
            Live data processing with confidence scores, hit rates, and proximity metrics for informed decision making.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
          <Sparkles className="w-12 h-12 text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Global Coverage</h3>
          <p className="text-gray-300">
            Support for international lotteries including Mega 7, Easy 6, Lotto India, and many more worldwide draws.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-4">Spatial Intelligence Map</h2>
        <div className="bg-black/30 rounded-lg p-8 text-center border border-gray-600 min-h-[200px] flex items-center justify-center">
          <div className="text-gray-400">
            <div className="w-16 h-16 border-4 border-dashed border-gray-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Sparkles className="w-8 h-8" />
            </div>
            <p className="text-lg font-medium">AR/VR Integration Pending</p>
            <p className="text-sm mt-2">Three.js 3D visualization will be implemented here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModule;