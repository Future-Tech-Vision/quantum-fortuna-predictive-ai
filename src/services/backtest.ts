export interface Prediction {
  id: string;
  predicted: number;
  actual: number;
}

export interface BacktestMetrics {
  hitRate: number;
  lift: number;
  brierScore: number;
}

export function runBacktest(data: Prediction[]): BacktestMetrics {
  const total = data.length;
  const hits = data.filter(d => d.predicted === d.actual).length;
  const hitRate = hits / total;

  const avgActual = data.reduce((sum, d) => sum + d.actual, 0) / total;
  const avgPredicted = data.reduce((sum, d) => sum + d.predicted, 0) / total;
  const lift = avgPredicted / avgActual;

  const brierScore = data.reduce((sum, d) => {
    const error = d.predicted - d.actual;
    return sum + error * error;
  }, 0) / total;

  return { hitRate, lift, brierScore };
}
