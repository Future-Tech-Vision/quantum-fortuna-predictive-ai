import React, { useState, useEffect } from 'react';
import { Brain, TrendingUp, AlertTriangle, CheckCircle, Target, BarChart3 } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface AnalysisData {
  lottery: string;
  predicted: number[];
  actual: number[];
  confidence: number;
  hitRate: number;
  proximity: number;
  date: string;
  algorithm: string;
}

const AnalysisModule: React.FC = () => {
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [selectedLottery, setSelectedLottery] = useState<string>('all');
  const [timeRange, setTimeRange] = useState<string>('30d');

  // Sample analysis data based on the provided CSV files
  const sampleData: AnalysisData[] = [
    {
      lottery: 'Emirates MEGA7',
      predicted: [7, 21, 24, 30, 31, 34, 37],
      actual: [7, 21, 24, 30, 31, 34, 37],
      confidence: 94.7,
      hitRate: 100.0,
      proximity: 100.0,
      date: '2025-08-06',
      algorithm: 'Quantum Neural v4.7'
    },
    {
      lottery: 'Emirates EASY6',
      predicted: [1, 5, 16, 20, 23, 26],
      actual: [1, 5, 16, 20, 23, 26],
      confidence: 91.8,
      hitRate: 100.0,
      proximity: 100.0,
      date: '2025-08-05',
      algorithm: 'Deep Learning v4.3'
    },
    {
      lottery: 'Lotto India',
      predicted: [9, 16, 24, 33, 45, 52],
      actual: [9, 16, 24, 33, 45, 52],
      confidence: 90.2,
      hitRate: 100.0,
      proximity: 100.0,
      date: '2025-08-06',
      algorithm: 'Ensemble AI v4.8'
    },
    {
      lottery: 'EuroMillions',
      predicted: [5, 6, 42, 44, 46],
      actual: [5, 6, 42, 44, 46],
      confidence: 92.8,
      hitRate: 100.0,
      proximity: 100.0,
      date: '2025-08-05',
      algorithm: 'Multi-Modal v4.9'
    },
    {
      lottery: 'Powerball',
      predicted: [8, 23, 41, 55, 69],
      actual: [8, 23, 41, 55, 69],
      confidence: 89.6,
      hitRate: 100.0,
      proximity: 100.0,
      date: '2025-08-06',
      algorithm: 'Quantum Boost v4.2'
    },
    {
      lottery: 'Free-Lottery.net',
      predicted: [3, 12, 18, 27, 34, 41],
      actual: [2, 11, 19, 26, 33, 40],
      confidence: 88.7,
      hitRate: 92.3,
      proximity: 95.8,
      date: '2025-08-06',
      algorithm: 'Neural Cascade v4.4'
    },
    {
      lottery: 'UK Free Lottery',
      predicted: [7, 15, 22, 28, 35, 42],
      actual: [6, 14, 23, 27, 34, 41],
      confidence: 87.2,
      hitRate: 91.7,
      proximity: 94.3,
      date: '2025-08-06',
      algorithm: 'Adaptive Forest v3.9'
    }
  ];

  useEffect(() => {
    // Simulate analysis processing
    const processAnalysis = () => {
      const results = {
        overallAccuracy: 96.8,
        confidenceReliability: 91.4,
        proximityScore: 98.2,
        algorithmPerformance: {
          'Quantum Neural v4.7': { accuracy: 97.8, confidence: 94.7 },
          'Deep Learning v4.3': { accuracy: 95.2, confidence: 91.8 },
          'Ensemble AI v4.8': { accuracy: 96.4, confidence: 90.2 },
          'Multi-Modal v4.9': { accuracy: 98.1, confidence: 92.8 },
          'Quantum Boost v4.2': { accuracy: 94.6, confidence: 89.6 }
        },
        discrepancies: [
          {
            lottery: 'Free-Lottery.net',
            predicted: [3, 12, 18, 27, 34, 41],
            actual: [2, 11, 19, 26, 33, 40],
            proximity: 95.8,
            issue: 'Systematic -1 offset pattern detected'
          },
          {
            lottery: 'UK Free Lottery',
            predicted: [7, 15, 22, 28, 35, 42],
            actual: [6, 14, 23, 27, 34, 41],
            proximity: 94.3,
            issue: 'Consistent -1 variance in free lottery algorithms'
          }
        ],
        recommendations: [
          'Implement +1 calibration offset for free lottery platforms',
          'Deploy specialized algorithms for low-stakes lottery patterns',
          'Enhance Neural Cascade v4.4 for free-lottery.net optimization',
          'Integrate accessibility-focused prediction models for UK platform'
        ]
      };
      setAnalysisResults(results);
    };

    processAnalysis();
  }, [selectedLottery, timeRange]);

  const accuracyData = {
    labels: ['MEGA7', 'EASY6', 'Lotto India', 'EuroMillions', 'Powerball', 'Free-Lottery.net', 'UK Free Lottery'],
    datasets: [
      {
        label: 'Prediction Accuracy (%)',
        data: [97.8, 95.2, 96.4, 98.1, 94.6, 92.3, 91.7],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(147, 51, 234, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(16, 185, 129, 0.8)',
        ],
        borderColor: [
          'rgb(34, 197, 94)',
          'rgb(59, 130, 246)',
          'rgb(147, 51, 234)',
          'rgb(245, 158, 11)',
          'rgb(239, 68, 68)',
          'rgb(236, 72, 153)',
          'rgb(16, 185, 129)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const trendData = {
    labels: ['July W1', 'July W2', 'July W3', 'July W4', 'August W1'],
    datasets: [
      {
        label: 'Accuracy Trend',
        data: [89.2, 91.5, 93.1, 94.8, 96.8],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Confidence Reliability',
        data: [82.1, 84.7, 86.3, 88.1, 91.4],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgb(209, 213, 219)',
        },
      },
      title: {
        display: true,
        color: 'rgb(255, 255, 255)',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'rgb(156, 163, 175)',
        },
        grid: {
          color: 'rgba(156, 163, 175, 0.2)',
        },
      },
      x: {
        ticks: {
          color: 'rgb(156, 163, 175)',
        },
        grid: {
          color: 'rgba(156, 163, 175, 0.2)',
        },
      },
    },
  };

  const exportAnalysis = () => {
    const csvData = [
      ['Lottery', 'Algorithm', 'Accuracy', 'Confidence', 'Proximity', 'Status'],
      ...sampleData.map(item => [
        item.lottery,
        item.algorithm,
        `${item.hitRate}%`,
        `${item.confidence}%`,
        `${item.proximity}%`,
        item.hitRate > 90 ? 'Excellent' : item.hitRate > 80 ? 'Good' : 'Needs Improvement'
      ])
    ];

    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'quantum_fortuna_analysis.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (!analysisResults) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="text-center py-12">
          <Brain className="w-16 h-16 text-blue-400 mx-auto mb-4 animate-pulse" />
          <h1 className="text-2xl font-bold text-white mb-2">Processing Analysis...</h1>
          <p className="text-gray-300">Analyzing prediction datasets and model performance</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <BarChart3 className="w-16 h-16 text-purple-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2">Prediction Analysis Dashboard</h1>
        <p className="text-gray-300">Comprehensive model accuracy assessment and strategic insights</p>
      </div>

      {/* Control Panel */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4">
            <select
              value={selectedLottery}
              onChange={(e) => setSelectedLottery(e.target.value)}
              className="bg-black/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-purple-400 focus:outline-none"
            >
              <option value="all">All Lotteries</option>
              <option value="mega7">Emirates MEGA7</option>
              <option value="easy6">Emirates EASY6</option>
              <option value="fast5">Emirates FAST5</option>
              <option value="euromillions">EuroMillions</option>
            </select>
            
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-black/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-purple-400 focus:outline-none"
            >
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
              <option value="1y">Last Year</option>
            </select>
          </div>

          <button
            onClick={exportAnalysis}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
          >
            <Target size={16} />
            <span>Export Analysis</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-lg rounded-2xl p-6 border border-green-400/30">
          <div className="flex items-center space-x-3 mb-2">
            <CheckCircle className="w-8 h-8 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Overall Accuracy</h3>
          </div>
          <div className="text-3xl font-bold text-green-400 mb-1">{analysisResults.overallAccuracy}%</div>
          <div className="text-sm text-gray-300">+2.3% from last period</div>
        </div>

        <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30">
          <div className="flex items-center space-x-3 mb-2">
            <TrendingUp className="w-8 h-8 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Confidence Reliability</h3>
          </div>
          <div className="text-3xl font-bold text-blue-400 mb-1">{analysisResults.confidenceReliability}%</div>
          <div className="text-sm text-gray-300">+1.8% improvement</div>
        </div>

        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
          <div className="flex items-center space-x-3 mb-2">
            <Target className="w-8 h-8 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Proximity Score</h3>
          </div>
          <div className="text-3xl font-bold text-purple-400 mb-1">{analysisResults.proximityScore}%</div>
          <div className="text-sm text-gray-300">Near-miss accuracy</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-400/30">
          <div className="flex items-center space-x-3 mb-2">
            <AlertTriangle className="w-8 h-8 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">Issues Detected</h3>
          </div>
          <div className="text-3xl font-bold text-yellow-400 mb-1">{analysisResults.discrepancies.length}</div>
          <div className="text-sm text-gray-300">Requiring attention</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-4">Accuracy by Lottery</h3>
          <div className="h-80">
            <Bar data={accuracyData} options={{...chartOptions, plugins: {...chartOptions.plugins, title: {display: false}}}} />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-4">Performance Trends</h3>
          <div className="h-80">
            <Line data={trendData} options={{...chartOptions, plugins: {...chartOptions.plugins, title: {display: false}}}} />
          </div>
        </div>
      </div>

      {/* Algorithm Performance */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8">
        <h3 className="text-xl font-bold text-white mb-6">Algorithm Performance Analysis</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(analysisResults.algorithmPerformance).map(([algorithm, performance]: [string, any]) => (
            <div key={algorithm} className="bg-black/30 rounded-lg p-4 border border-gray-600">
              <h4 className="text-white font-medium mb-2">{algorithm}</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Accuracy:</span>
                  <span className="text-green-400 font-bold">{performance.accuracy}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Confidence:</span>
                  <span className="text-blue-400 font-bold">{performance.confidence}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                    style={{ width: `${performance.accuracy}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Discrepancy Analysis */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8">
        <h3 className="text-xl font-bold text-white mb-6">Discrepancy Mapping</h3>
        <div className="space-y-4">
          {analysisResults.discrepancies.map((discrepancy: any, index: number) => (
            <div key={index} className="bg-red-600/20 rounded-lg p-4 border border-red-400/30">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-white">{discrepancy.lottery}</h4>
                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                  {discrepancy.proximity}% Proximity
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <div>
                  <span className="text-gray-400 text-sm">Predicted:</span>
                  <div className="flex gap-2 mt-1">
                    {discrepancy.predicted.map((num: number, i: number) => (
                      <div key={i} className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Actual:</span>
                  <div className="flex gap-2 mt-1">
                    {discrepancy.actual.map((num: number, i: number) => (
                      <div key={i} className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-black/30 rounded-lg p-3 border border-gray-600">
                <span className="text-yellow-400 font-medium">Issue Identified: </span>
                <span className="text-white">{discrepancy.issue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-6">Strategic Enhancement Recommendations</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Algorithm Improvements</h4>
            <ul className="space-y-3">
              {analysisResults.recommendations.slice(0, 2).map((rec: string, index: number) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="text-gray-300">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Free Lottery Optimization</h4>
            <ul className="space-y-3">
              {analysisResults.recommendations.slice(2).map((rec: string, index: number) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp size={14} className="text-white" />
                  </div>
                  <span className="text-gray-300">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="bg-green-600/20 rounded-lg p-4 border border-green-600/30">
            <h4 className="text-green-400 font-semibold mb-2">Next Steps</h4>
            <p className="text-gray-300 text-sm">
              Deploy +1 calibration offset for free lottery platforms to address systematic variance patterns. 
              Implement specialized low-stakes algorithms for enhanced accessibility lottery performance. 
              Schedule Neural Cascade v4.5 upgrade for free-lottery.net optimization by August 15, 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisModule;