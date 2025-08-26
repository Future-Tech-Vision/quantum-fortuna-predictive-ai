import React from 'react';
import { Shield, Check, Clock, Hash } from 'lucide-react';

const TrustModule: React.FC = () => {
  const auditTrail = [
    {
      timestamp: '2025-08-07 09:15:00 IST',
      action: 'Model Update v4.2.1',
      hash: 'a8f9c2d3e4b5a6c7d8e9f0a1b2c3d4e5f6a7b8c9',
      status: 'verified'
    },
    {
      timestamp: '2025-08-07 06:30:00 IST',
      action: 'Quantum Algorithm Calibration',
      hash: 'b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8',
      status: 'verified'
    },
    {
      timestamp: '2025-08-07 03:45:00 IST',
      action: 'Neural Network Enhancement',
      hash: 'c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9',
      status: 'verified'
    },
    {
      timestamp: '2025-08-06 21:20:00 IST',
      action: 'Global Data Integration',
      hash: 'd1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0',
      status: 'verified'
    }
  ];

  const metrics = [
    { label: 'System Uptime', value: '99.97%', color: 'text-green-400' },
    { label: 'Data Integrity', value: '100%', color: 'text-green-400' },
    { label: 'Algorithm Accuracy', value: '94.2%', color: 'text-blue-400' },
    { label: 'Response Time', value: '< 200ms', color: 'text-cyan-400' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2">Trust & Verification</h1>
        <p className="text-gray-300">System integrity, audit trails, and transparency metrics</p>
      </div>

      {/* System Status */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
          >
            <div className={`text-2xl font-bold mb-2 ${metric.color}`}>
              {metric.value}
            </div>
            <div className="text-gray-400 text-sm">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Current System Hash */}
      <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <Hash className="w-8 h-8 text-green-400" />
          <h2 className="text-xl font-bold text-white">Current System Hash</h2>
          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
            Verified
          </span>
        </div>
        <div className="bg-black/30 rounded-lg p-4 font-mono text-green-400 text-sm break-all border border-gray-600">
          SHA256: a8f9c2d3e4b5a6c7d8e9f0a1b2c3d4e5f6a7b8c9
        </div>
        <div className="mt-2 text-gray-400 text-sm">
          Last Updated: August 7, 2025, 09:15 AM IST
        </div>
      </div>

      {/* Audit Trail */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
        <div className="px-6 py-4 border-b border-white/20">
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <Clock className="w-6 h-6 text-blue-400" />
            <span>Audit Trail</span>
          </h2>
        </div>

        <div className="divide-y divide-white/10">
          {auditTrail.map((entry, index) => (
            <div key={index} className="px-6 py-4 hover:bg-white/5 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">{entry.action}</span>
                </div>
                <span className="text-gray-400 text-sm">{entry.timestamp}</span>
              </div>
              <div className="ml-8">
                <div className="text-gray-400 text-sm font-mono break-all">
                  Hash: {entry.hash}
                </div>
                <div className="mt-1">
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium border border-green-500/30">
                    {entry.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Info */}
      <div className="mt-8 bg-blue-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30">
        <h3 className="text-lg font-semibold text-white mb-4">System Compliance</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-medium mb-2">Security Standards</h4>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• SHA-256 cryptographic hashing</li>
              <li>• Real-time integrity verification</li>
              <li>• Automated audit trail generation</li>
              <li>• Data immutability protocols</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Transparency Features</h4>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• Open algorithm documentation</li>
              <li>• Public prediction tracking</li>
              <li>• Performance metric disclosure</li>
              <li>• Historical accuracy reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustModule;