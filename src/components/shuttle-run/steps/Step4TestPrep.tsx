import React, { useState } from 'react';
import { ArrowLeft, Shield, Camera, Sparkles, RotateCcw, Flag, ChevronRight } from 'lucide-react';

interface Step4Props {
  onComplete: (data: any) => void;
  onBack: () => void;
}

export function ShuttleRunTestPrep({ onComplete, onBack }: Step4Props) {
  const [testPrepData] = useState({
    frameLayout: 'OK',
    lighting: 'OK',
    distance: '10m',
    conesVisible: '2 visible',
    stance: 'Dominant foot forward',
    startLine: 'Toe behind line',
    calibration: 'Ready',
    audio: '3-2-1 countdown'
  });

  const [setupProgress] = useState(80);

  const handleStartTest = () => {
    onComplete({ testPrepComplete: true });
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
          <h1 className="text-lg font-semibold text-gray-900">Shuttle Run • Step 4 of 5</h1>
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
          <span className="text-sm text-gray-600">Test Prep • Setup</span>
          <span className="text-sm font-medium text-gray-900">{setupProgress}%</span>
        </div>
      </div>

      <div className="px-4 space-y-4">
        {/* Set Start Position Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Set Start Position</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Align with cones. We'll verify SAI-<br />
                compliant layout and lighting.
              </p>
            </div>
            <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-full">
              <Shield size={16} className="text-blue-600 mr-1" />
              <span className="text-xs font-medium text-blue-700">SAI Check</span>
            </div>
          </div>

          {/* Camera Preview with Test Setup */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
            <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center relative">
              {/* Simulated test environment with cones and person */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Red cone */}
                <div className="absolute left-1/4 top-1/2 w-4 h-6 bg-red-500 rounded-b-full transform -translate-y-1/2"></div>
                {/* Person at start line */}
                <div className="w-16 h-20 bg-blue-300 rounded-lg flex items-center justify-center text-xs text-white font-medium">
                  Ready
                </div>
                {/* Starting line */}
                <div className="absolute bottom-1/3 left-1/2 w-16 h-1 bg-white transform -translate-x-1/2"></div>
              </div>
            </div>
            
            {/* Camera Status Overlays */}
            <div className="absolute top-3 left-3 flex gap-2">
              <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                <Camera size={14} className="text-green-600 mr-1" />
                <span className="text-xs font-medium text-green-700">Frame Layout</span>
              </div>
              <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                <span className="text-xs font-medium text-green-700">Light OK</span>
              </div>
            </div>

            {/* Detection Status */}
            <div className="absolute bottom-3 left-3 flex gap-2">
              <div className="bg-blue-100 px-2 py-1 rounded-full">
                <span className="text-xs font-medium text-blue-700">Distance: 10m</span>
              </div>
              <div className="bg-green-100 px-2 py-1 rounded-full">
                <span className="text-xs font-medium text-green-700">Cones: 2 visible</span>
              </div>
              <div className="flex items-center bg-blue-50 px-2 py-1 rounded-full">
                <Sparkles size={12} className="text-blue-600 mr-1" />
                <span className="text-xs font-medium text-blue-700">AI Assist</span>
              </div>
            </div>
          </div>

          {/* Position Details */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">Stance</div>
              <div className="text-sm font-semibold text-gray-900">Dominant foot forward</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">Start Line</div>
              <div className="text-sm font-semibold text-gray-900">Toe behind line</div>
            </div>
          </div>

          {/* Instruction Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <div className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-bold">i</span>
              </div>
              <p className="text-sm text-blue-800">
                Place phone waist-high, landscape. Ensure both cones and starting line are clearly visible. Hold steady for a 3-second calibration.
              </p>
            </div>
          </div>

          {/* System Status */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <div className="text-xs text-green-600 mb-1">Calibration</div>
              <div className="text-sm font-semibold text-green-800">Ready</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <div className="text-xs text-blue-600 mb-1">Audio</div>
              <div className="text-sm font-semibold text-blue-800">3-2-1 countdown</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <RotateCcw size={18} className="text-gray-600 mr-2" />
              <span className="font-medium text-gray-700">Reposition</span>
            </button>
            <button 
              onClick={handleStartTest}
              className="flex-2 flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <Flag size={18} className="mr-2" />
              <span className="font-medium">Start Test</span>
            </button>
          </div>
        </div>

        {/* Next Step Preview */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">Up Next: Shuttle Run</h3>
              <p className="text-sm text-gray-600">We'll auto-time, count touches, and flag form breaks.</p>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-blue-600 font-medium mr-2">Final</span>
              <ChevronRight size={16} className="text-blue-600" />
            </div>
          </div>
        </div>

        {/* Test Information */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">Attempts</div>
            <div className="text-lg font-semibold text-gray-900">-</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">Target Time</div>
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
