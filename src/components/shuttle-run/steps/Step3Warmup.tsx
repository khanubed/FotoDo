import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Volume2, Shield, Camera, Pause, Check, ChevronRight } from 'lucide-react';

interface Step3Props {
  onComplete: (data: any) => void;
  onBack: () => void;
}

export function ShuttleRunWarmup({ onComplete, onBack }: Step3Props) {
  const [warmupData] = useState({
    timer: '00:30',
    sets: 2,
    heartRate: 98,
    rpe: 'Easy',
    drill: '2 x 10m Easy Shuttle',
    focus: 'Turn control • Breathing',
    formCheck: 'Knees soft, chest up',
    readiness: 'Building heat'
  });

  const [setupProgress] = useState(60);

  const handleWarmupDone = () => {
    onComplete({ warmupComplete: true });
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
          <h1 className="text-lg font-semibold text-gray-900">Shuttle Run • Step 3 of 5</h1>
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
          <span className="text-sm text-gray-600">Warm-up • Guided</span>
          <span className="text-sm font-medium text-gray-900">{setupProgress}%</span>
        </div>
      </div>

      <div className="px-4 space-y-4">
        {/* Guided Warm-up Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Guided Warm-up</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Follow the cues. We'll auto-capture<br />
                form and readiness.
              </p>
            </div>
            <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-full">
              <Sparkles size={16} className="text-blue-600 mr-1" />
              <span className="text-xs font-medium text-blue-700">AI Assist</span>
            </div>
          </div>

          {/* Camera Preview with Person */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
              {/* Simulated person in warm-up position */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-32 bg-blue-300 rounded-lg flex items-center justify-center text-xs text-white font-medium">
                  Athlete<br/>Warming Up
                </div>
              </div>
            </div>
            
            {/* Camera Status Overlays */}
            <div className="absolute top-3 left-3 flex gap-2">
              <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                <Shield size={14} className="text-green-600 mr-1" />
                <span className="text-xs font-medium text-green-700">SAI Standard</span>
              </div>
              <div className="flex items-center bg-blue-100 px-2 py-1 rounded-full">
                <Volume2 size={14} className="text-blue-600 mr-1" />
                <span className="text-xs font-medium text-blue-700">Cues On</span>
              </div>
            </div>

            {/* Biometric Data */}
            <div className="absolute bottom-3 left-3 flex gap-2">
              <div className="bg-red-100 px-2 py-1 rounded-full">
                <span className="text-xs font-medium text-red-700">HR: 98 bpm</span>
              </div>
              <div className="bg-green-100 px-2 py-1 rounded-full">
                <span className="text-xs font-medium text-green-700">RPE: Easy</span>
              </div>
              <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                <Camera size={12} className="text-gray-600 mr-1" />
                <span className="text-xs font-medium text-gray-700">Auto</span>
              </div>
            </div>
          </div>

          {/* Timer and Sets */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-3xl font-mono font-bold text-gray-900 mr-4">00:30</div>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  2 sets
                </div>
              </div>
            </div>
          </div>

          {/* Drill Information */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">Drill</div>
              <div className="text-sm font-semibold text-gray-900">2 x 10m Easy Shuttle</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">Focus</div>
              <div className="text-sm font-semibold text-gray-900">Turn control • Breathing</div>
            </div>
          </div>

          {/* Instruction Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <div className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-bold">i</span>
              </div>
              <p className="text-sm text-blue-800">
                Start jogging between cones. Touch line with one foot each turn. Keep camera steady and cones visible.
              </p>
            </div>
          </div>

          {/* Form Check and Readiness */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">Form Check</div>
              <div className="text-sm font-semibold text-gray-900">Knees soft, chest up</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
              <div className="text-xs text-orange-600 mb-1">Readiness</div>
              <div className="text-sm font-semibold text-orange-800">Building heat</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <Pause size={18} className="text-gray-600 mr-2" />
              <span className="font-medium text-gray-700">Pause</span>
            </button>
            <button 
              onClick={handleWarmupDone}
              className="flex-2 flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
            >
              <Check size={18} className="mr-2" />
              <span className="font-medium">Warm-up Done</span>
            </button>
          </div>
        </div>

        {/* Next Step Preview */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">Next: Test Prep</h3>
              <p className="text-sm text-gray-600">Set your start stance. We'll count reps and time.</p>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-blue-600 font-medium mr-2">Up Next</span>
              <ChevronRight size={16} className="text-blue-600" />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">Attempts</div>
            <div className="text-lg font-semibold text-gray-900">-</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">Target Reps</div>
            <div className="text-lg font-semibold text-gray-900">-</div>
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
