import React, { useEffect, useState } from 'react';
import { runBacktest, Prediction, BacktestMetrics } from '../../services/backtest';
import { Bar } from 'react-chartjs-2';

const dummyData: Prediction[] = [
  { id: '1', predicted: 5, actual: 5 },
  { id: '2', predicted: 3, actual: 2 },
  { id: '3', predicted: 7, actual: 7 },
  // Replace with real snapshot ingestion
];

export default function Analysis() {
  const [metrics, setMetrics] = useState<BacktestMetrics | null>(null);

  useEffect(() => {
    const result = runBacktest(dummyData);
    setMetrics(result);
  }, []);

  if (!metrics) return <div>Loading metrics...</div>;

  const chartData = {
    labels: ['Hit Rate', 'Lift', 'Brier Score'],
    datasets: [
      {
        label: 'Backtest Metrics',
        data: [metrics.hitRate, metrics.lift, metrics.brierScore],
        backgroundColor: ['#4ade80', '#60a5fa', '#f87171'],
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Prediction Backtest</h2>
      <Bar data={chartData} />
    </div>
  );
}
