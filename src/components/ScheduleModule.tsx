import React, { useState, useEffect } from 'react';
import { Clock, Calendar, AlertCircle } from 'lucide-react';

const ScheduleModule: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const draws = [
    {
      name: 'Emirates Draw MEGA7',
      nextDraw: new Date('2025-09-30T20:00:00'),
      frequency: 'Weekly',
      status: 'upcoming'
    },
    {
      name: 'Emirates Draw EASY6',
      nextDraw: new Date('2025-09-30T19:30:00'),
      frequency: 'Bi-weekly',
      status: 'upcoming'
    },
    {
      name: 'Emirates Draw FAST5',
      nextDraw: new Date('2025-09-30T18:00:00'),
      frequency: 'Daily',
      status: 'active'
    },
    {
      name: 'Omillionaire',
      nextDraw: new Date('2025-09-30T21:00:00'),
      frequency: 'Weekly',
      status: 'upcoming'
    },
    {
      name: 'Lotto India',
      nextDraw: new Date('2025-09-30T21:00:00'),
      frequency: 'Daily',
      status: 'active'
    },
    {
      name: 'EuroMillions',
      nextDraw: new Date('2025-09-30T21:00:00'),
      frequency: 'Bi-weekly',
      status: 'upcoming'
    },
    {
      name: 'Lottery.co.uk Free',
      nextDraw: new Date('2025-09-30T12:00:00'),
      frequency: 'Daily',
      status: 'active'
    },
    {
      name: 'Powerball USA',
      nextDraw: new Date('2025-09-30T23:00:00'),
      frequency: 'Bi-weekly',
      status: 'upcoming'
    }
  ];

  const getTimeRemaining = (targetDate: Date) => {
    const now = currentTime.getTime();
    const target = targetDate.getTime();
    const diff = target - now;

    if (diff <= 0) {
      return { expired: true, timeString: 'Draw Completed' };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    let timeString = '';
    if (days > 0) timeString += `${days}d `;
    if (hours > 0) timeString += `${hours}h `;
    if (minutes > 0) timeString += `${minutes}m `;
    timeString += `${seconds}s`;

    return { expired: false, timeString };
  };

  const getStatusColor = (status: string, expired: boolean) => {
    if (expired) return 'text-red-400';
    if (status === 'active') return 'text-green-400';
    return 'text-yellow-400';
  };

  const getStatusBadge = (status: string, expired: boolean) => {
    if (expired) return 'bg-red-500/20 text-red-400 border-red-500/30';
    if (status === 'active') return 'bg-green-500/20 text-green-400 border-green-500/30';
    return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Clock className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2">Draw Schedule</h1>
        <p className="text-gray-300">Live countdown timers for upcoming lottery draws</p>
      </div>

      <div className="mb-6 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
        <div className="flex items-center justify-center space-x-4">
          <Calendar className="w-6 h-6 text-cyan-400" />
          <span className="text-lg font-medium text-white">
            Current Time: {currentTime.toLocaleString('en-US', {
              timeZone: 'Asia/Kolkata',
              dateStyle: 'medium',
              timeStyle: 'medium'
            })} IST
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {draws.map((draw, index) => {
          const timeRemaining = getTimeRemaining(draw.nextDraw);
          
          return (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{draw.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusBadge(draw.status, timeRemaining.expired)}`}>
                  {timeRemaining.expired ? 'Completed' : draw.status.charAt(0).toUpperCase() + draw.status.slice(1)}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Next Draw:</span>
                  <span className="text-white">
                    {draw.nextDraw.toLocaleString('en-US', {
                      timeZone: 'Asia/Kolkata',
                      dateStyle: 'short',
                      timeStyle: 'short'
                    })} IST
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Frequency:</span>
                  <span className="text-white">{draw.frequency}</span>
                </div>

                <div className="bg-black/30 rounded-lg p-4 text-center border border-gray-600">
                  <div className={`text-2xl font-mono font-bold mb-2 ${getStatusColor(draw.status, timeRemaining.expired)}`}>
                    {timeRemaining.timeString}
                  </div>
                  {!timeRemaining.expired && (
                    <div className="text-sm text-gray-400">Time Remaining</div>
                  )}
                </div>

                {timeRemaining.expired && (
                  <div className="flex items-center justify-center space-x-2 text-orange-400">
                    <AlertCircle size={16} />
                    <span className="text-sm">Results processing...</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-blue-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30">
        <h3 className="text-lg font-semibold text-white mb-2">Schedule Notes</h3>
        <ul className="text-gray-300 space-y-1 text-sm">
          <li>• All times are displayed in Indian Standard Time (IST)</li>
          <li>• Countdown timers update every second for accuracy</li>
          <li>• Post-draw analysis begins immediately after completion</li>
          <li>• Prediction models are updated within 30 minutes of results</li>
        </ul>
      </div>
    </div>
  );
};

export default ScheduleModule;