import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Mic, Shield, RefreshCw, Play, MessageSquare, AlertTriangle, HelpCircle } from 'lucide-react';

interface Step2Props {
  onComplete: (data: any) => void;
  onBack: () => void;
}

export function ShuttleRunCalibration({ onComplete, onBack }: Step2Props) {
  const [calibrationData] = useState({
    conesDetected: true,
    distance: '5.0m',
    leftCone: 'Aligned',
    rightCone: 'Aligned',
    runPath: 'Clear',
    estimatedTime: '00:20s',
    attempts: 2,
    safety: 'Cleared'
  });

  const [setupProgress] = useState(40);

  const handleContinue = () => {
    onComplete({ calibrationData: calibrationData });
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
          <h1 className="text-lg font-semibold text-gray-900">Shuttle Run • Step 2 of 5</h1>
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
          <span className="text-sm text-gray-600">Warm-up & Calibration</span>
          <span className="text-sm font-medium text-gray-900">{setupProgress}%</span>
        </div>
      </div>

      <div className="px-4 space-y-4">
        {/* Calibrate Space Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Calibrate Your Space</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mark the cones and confirm distance.<br />
                We'll verify alignment.
              </p>
            </div>
            <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-full">
              <Sparkles size={16} className="text-blue-600 mr-1" />
              <span className="text-xs font-medium text-blue-700">AI Assist</span>
            </div>
          </div>

          {/* Camera Preview with Cone */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
              {/* Simulated cone detection */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-12 bg-orange-500 rounded-b-full transform rotate-0 relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-10 bg-orange-400 rounded-b-full"></div>
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
                <Mic size={14} className="text-blue-600 mr-1" />
                <span className="text-xs font-medium text-blue-700">Voice On</span>
              </div>
            </div>

            {/* Detection Status */}
            <div className="absolute bottom-3 left-3 flex gap-2">
              <div className="bg-green-100 px-2 py-1 rounded-full">
                <span className="text-xs font-medium text-green-700">Cones: Detected</span>
              </div>
              <div className="bg-blue-100 px-2 py-1 rounded-full">
                <span className="text-xs font-medium text-blue-700">Distance: 5.0m</span>
              </div>
              <button className="flex items-center bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full transition-colors">
                <RefreshCw size={12} className="text-gray-600 mr-1" />
                <span className="text-xs font-medium text-gray-700">Calibrate</span>
              </button>
            </div>
          </div>

          {/* Alignment Status */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <div className="text-xs text-green-600 mb-1">Left Cone</div>
              <div className="text-sm font-semibold text-green-800">Aligned</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <div className="text-xs text-green-600 mb-1">Right Cone</div>
              <div className="text-sm font-semibold text-green-800">Aligned</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <div className="text-xs text-green-600 mb-1">Run Path</div>
              <div className="text-sm font-semibold text-green-800">Clear</div>
            </div>
          </div>

          {/* Instruction Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <div className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-bold">i</span>
              </div>
              <p className="text-sm text-blue-800">
                Stand at the start cone. Take two light practice shuttles to warm up. Keep the cones within the frame.
              </p>
            </div>
          </div>

          {/* Test Information */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">Estimated Time</div>
              <div className="text-lg font-semibold text-gray-900">00:20s</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">Attempts</div>
              <div className="text-lg font-semibold text-gray-900">2</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <div className="text-xs text-green-600 mb-1">Safety</div>
              <div className="text-sm font-semibold text-green-800">Cleared</div>
            </div>
          </div>

          {/* Safety Warning */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
            <div className="flex items-start">
              <AlertTriangle size={16} className="text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-800">
                Ensure no one is in the run path before proceeding.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <RefreshCw size={18} className="text-gray-600 mr-2" />
              <span className="font-medium text-gray-700">Recalibrate</span>
            </button>
            <button 
              onClick={handleContinue}
              className="flex-2 flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <Play size={18} className="mr-2" />
              <span className="font-medium">Begin Warm-up</span>
            </button>
          </div>
        </div>

        {/* Help Resources */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
            <MessageSquare size={24} className="text-gray-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900 mb-1">Coach Tips</div>
            <div className="text-xs text-gray-500">Turn cues & pacing</div>
          </button>
          <button className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
            <Shield size={24} className="text-gray-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900 mb-1">Safety</div>
            <div className="text-xs text-gray-500">Warm-up & space</div>
          </button>
          <button className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
            <HelpCircle size={24} className="text-gray-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900 mb-1">FAQ</div>
            <div className="text-xs text-gray-500">Calibration help</div>
          </button>
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
