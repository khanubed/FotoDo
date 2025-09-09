import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Mic, Activity, Sparkles, Pause, StopCircle, Play, ChevronRight } from 'lucide-react';

interface Step5Props {
  onComplete: (data: any) => void;
  onBack: () => void;
}

export function ShuttleRunLiveTest({ onComplete, onBack }: Step5Props) {
  const [liveTestData, setLiveTestData] = useState({
    touches: 0,
    splits: 0,
    timer: '00:00.00',
    attempt: '1 of 2',
    formStatus: 'Monitoring',
    countdown: '3-2-1',
    saiMode: true,
    tracking: true,
    aiAssist: true
  });

  const [setupProgress] = useState(100);
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const ms = Math.floor((milliseconds % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
  };

  const handleFinishAttempt = () => {
    setIsRunning(false);
    const finalTime = formatTime(timeElapsed);
    onComplete({ 
      testResults: {
        time: finalTime,
        touches: liveTestData.touches,
        splits: liveTestData.splits,
        attempts: 1
      }
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white shadow-sm">
        <button 
          onClick={onBack}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <div className="flex-1 text-center">
          <h1 className="text-lg font-semibold text-gray-900">Shuttle Run • Step 5 of 5</h1>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-4 pb-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${setupProgress}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-600">Live Test</span>
          <span className="text-sm font-medium text-gray-900">{setupProgress}%</span>
        </div>
      </div>

      <div className="px-4 space-y-4">
        {/* Live Timing Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Live Timing</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Auto-detect touches, SAI-compliant<br />
                timing.
              </p>
            </div>
            <div className="flex items-center bg-green-100 px-3 py-1.5 rounded-full">
              <Shield size={16} className="text-green-600 mr-1" />
              <span className="text-xs font-medium text-green-700">SAI Mode</span>
            </div>
          </div>

          {/* Live Camera View */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
              {/* Motion blur effect to simulate running */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-24 bg-blue-400 rounded-lg opacity-80 blur-sm transform skew-x-12">
                </div>
                <div className="absolute w-24 h-28 bg-blue-300 rounded-lg opacity-60 blur-md transform -skew-x-6">
                </div>
              </div>
              
              {/* Motion lines */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute h-px bg-white opacity-30 animate-pulse"
                    style={{
                      top: `${20 + i * 10}%`,
                      left: `${10 + (i % 2) * 20}%`,
                      width: `${30 + i * 5}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Live Status Overlays */}
            <div className="absolute top-3 left-3 flex gap-2">
              <div className="flex items-center bg-blue-100 px-2 py-1 rounded-full animate-pulse">
                <Mic size={14} className="text-blue-600 mr-1" />
                <span className="text-xs font-medium text-blue-700">Countdown</span>
              </div>
              <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                <Activity size={14} className="text-green-600 mr-1" />
                <span className="text-xs font-medium text-green-700">Tracking</span>
              </div>
            </div>

            {/* Live Stats */}
            <div className="absolute bottom-3 left-3 flex gap-2">
              <div className="bg-gray-800 bg-opacity-80 text-white px-2 py-1 rounded-full">
                <span className="text-xs font-medium">Touches: {liveTestData.touches}</span>
              </div>
              <div className="bg-gray-800 bg-opacity-80 text-white px-2 py-1 rounded-full">
                <span className="text-xs font-medium">Splits: {liveTestData.splits}</span>
              </div>
              <div className="flex items-center bg-blue-100 px-2 py-1 rounded-full">
                <Sparkles size={12} className="text-blue-600 mr-1" />
                <span className="text-xs font-medium text-blue-700">AI Assist</span>
              </div>
            </div>
          </div>

          {/* Timer Display */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center bg-green-100 px-3 py-1.5 rounded-full">
                <Mic size={16} className="text-green-600 mr-1" />
                <span className="text-sm font-medium text-green-700">3-2-1</span>
              </div>
              <div className="text-4xl font-mono font-bold text-gray-900 tracking-wider">
                {formatTime(timeElapsed)}
              </div>
              <div className="flex items-center bg-green-100 px-3 py-1.5 rounded-full">
                <span className="text-sm font-medium text-green-700">Auto</span>
              </div>
            </div>
          </div>

          {/* Test Status */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">Attempt</div>
              <div className="text-lg font-semibold text-gray-900">1 of 2</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <div className="text-xs text-blue-600 mb-1">Form</div>
              <div className="text-sm font-semibold text-blue-800">Monitoring</div>
            </div>
          </div>

          {/* Ready State */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
            <div className="flex items-center">
              <Play size={16} className="text-green-600 mr-2" />
              <span className="text-sm font-medium text-green-800">Ready to start on beep</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button 
              className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              onClick={() => setIsRunning(false)}
            >
              <Pause size={18} className="text-gray-600 mr-2" />
              <span className="font-medium text-gray-700">Pause</span>
            </button>
            <button 
              className="flex-2 flex items-center justify-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
              onClick={handleFinishAttempt}
            >
              <StopCircle size={18} className="mr-2" />
              <span className="font-medium">Finish Attempt</span>
            </button>
          </div>
        </div>

        {/* Next Step Preview */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">Next: Review & Save</h3>
              <p className="text-sm text-gray-600">Check splits, flags, and share with guardian/coach.</p>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-blue-600 font-medium mr-2">Summary</span>
              <ChevronRight size={16} className="text-blue-600" />
            </div>
          </div>
        </div>

        {/* Additional Controls */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">Best Time</div>
            <div className="text-lg font-semibold text-gray-900">-</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">Flags</div>
            <div className="text-lg font-semibold text-gray-900">0</div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <button className="flex flex-col items-center p-2">
            <div className="w-6 h-6 mb-1">🏠</div>
            <span className="text-xs text-gray-600">Home</span>
          </button>
          <button className="flex flex-col items-center p-2">
            <div className="w-6 h-6 mb-1">📊</div>
            <span className="text-xs font-medium text-blue-600">Assess</span>
          </button>
          <button className="flex flex-col items-center p-2">
            <div className="w-6 h-6 mb-1">📈</div>
            <span className="text-xs text-gray-600">Progress</span>
          </button>
          <button className="flex flex-col items-center p-2">
            <div className="w-6 h-6 mb-1">👤</div>
            <span className="text-xs text-gray-600">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
