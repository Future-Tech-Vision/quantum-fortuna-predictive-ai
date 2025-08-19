import React from 'react';
import { BarChart3, TrendingUp, Sparkles } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const InsightsModule: React.FC = () => {
  const numberFrequencyData = {
    labels: ['1-10', '11-20', '21-30', '31-40', '41-50'],
    datasets: [
      {
        label: 'Frequency',
        data: [28, 24, 35, 31, 22],
        backgroundColor: [
          'rgba(6, 182, 212, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(147, 51, 234, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(34, 197, 94, 0.8)',
        ],
        borderColor: [
          'rgb(6, 182, 212)',
          'rgb(59, 130, 246)',
          'rgb(147, 51, 234)',
          'rgb(245, 158, 11)',
          'rgb(34, 197, 94)',
        ],
        borderWidth: 2,
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
        text: 'Number Range Frequency Distribution',
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

  const insights = [
    {
      title: 'Hot Numbers',
      value: '12, 23, 33, 41',
      description: 'Most frequently drawn numbers this month',
      trend: '+18%',
      color: 'text-red-400'
    },
    {
      title: 'Cold Numbers',
      value: '6, 17, 29, 38',
      description: 'Least frequently drawn numbers',
      trend: '-12%',
      color: 'text-blue-400'
    },
    {
      title: 'Pattern Match',
      value: '96.8%',
      description: 'AI pattern recognition accuracy',
      trend: '+7.5%',
      color: 'text-green-400'
    },
    {
      title: 'Odd/Even Ratio',
      value: '4:3',
      description: 'Optimal balance in winning combinations',
      trend: '+2.1%',
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <BarChart3 className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2">Analytics & Insights</h1>
        <p className="text-gray-300">Data-driven lottery analysis and predictive visualizations</p>
      </div>

      {/* Key Insights Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">{insight.title}</h3>
              <TrendingUp className={`w-5 h-5 ${insight.color}`} />
            </div>
            <div className={`text-2xl font-bold mb-2 ${insight.color}`}>
              {insight.value}
            </div>
            <p className="text-gray-400 text-sm mb-2">{insight.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Trend:</span>
              <span className={`text-xs font-medium ${insight.color}`}>
                {insight.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Frequency Chart */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8">
        <div className="h-96">
          <Bar data={numberFrequencyData} options={chartOptions} />
        </div>
      </div>

      {/* Spatial Intelligence Map Placeholder */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Spatial Intelligence Map</h2>
          <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium border border-yellow-500/30">
            AR/VR Integration Pending
          </span>
        </div>
        
        <div className="bg-black/30 rounded-xl p-12 text-center border-2 border-dashed border-gray-600 min-h-[300px] flex items-center justify-center">
          <div className="text-gray-400">
            <div className="w-20 h-20 border-4 border-dashed border-gray-500 rounded-xl mx-auto mb-6 flex items-center justify-center">
              <Sparkles className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3D Number Density Visualization</h3>
            <p className="text-gray-500 mb-4">
              Interactive Three.js visualization will display number relationships,<br />
              frequency clusters, and predictive patterns in 3D space
            </p>
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 px-4 py-2 rounded-lg border border-blue-600/30">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-300 text-sm">Three.js Integration in Development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsModule;