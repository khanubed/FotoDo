import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Mic, Shield, Eye, Video, HelpCircle, BookOpen, Clock, AlertCircle, ArrowRight } from 'lucide-react';

interface Step1Props {
  onComplete: (data: any) => void;
  onBack: () => void;
}

export function ShuttleRunSetup({ onComplete, onBack }: Step1Props) {
  const [cameraStatus, setCameraStatus] = useState({
    frame: 'OK',
    lighting: 'Good',
    autoTrack: true
  });

  const [setupProgress] = useState(20);

  const handleContinue = () => {
    onComplete({ setupComplete: true });
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
          <h1 className="text-lg font-semibold text-gray-900">Shuttle Run • Step 1 of 5</h1>
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
          <span className="text-sm text-gray-600">Setup Camera</span>
          <span className="text-sm font-medium text-gray-900">{setupProgress}%</span>
        </div>
      </div>

      <div className="px-4 space-y-4">
        {/* Position Device Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Position Your Device</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Place phone 3m away at hip height.<br />
                Ensure cones are visible.
              </p>
            </div>
            <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-full">
              <Sparkles size={16} className="text-blue-600 mr-1" />
              <span className="text-xs font-medium text-blue-700">AI Assist</span>
            </div>
          </div>

          {/* Camera Preview */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <Video size={48} className="text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">Camera Preview</p>
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

            {/* Status Indicators */}
            <div className="absolute bottom-3 left-3 flex gap-2">
              <div className="bg-green-100 px-2 py-1 rounded-full">
                <span className="text-xs font-medium text-green-700">Frame: OK</span>
              </div>
              <div className="bg-green-100 px-2 py-1 rounded-full">
                <span className="text-xs font-medium text-green-700">Lighting: Good</span>
              </div>
              <div className="flex items-center bg-blue-100 px-2 py-1 rounded-full">
                <Eye size={12} className="text-blue-600 mr-1" />
                <span className="text-xs font-medium text-blue-700">Auto Track</span>
              </div>
            </div>
          </div>

          {/* Environment Checks */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">Cone Distance</div>
              <div className="text-lg font-semibold text-gray-900">5m</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">Surface</div>
              <div className="text-sm font-semibold text-gray-900">Flat, dry</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">Footwear</div>
              <div className="text-sm font-semibold text-gray-900">Trainers</div>
            </div>
          </div>

          {/* Instruction Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <div className="flex items-start">
              <AlertCircle size={16} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-blue-800">
                Align the center guide with both cones. Step back until your full body fits in frame.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <HelpCircle size={18} className="text-gray-600 mr-2" />
              <span className="font-medium text-gray-700">Need Help</span>
            </button>
            <button 
              onClick={handleContinue}
              className="flex-2 flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <span className="font-medium mr-2">Continue</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Help Resources */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
            <Video size={24} className="text-gray-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900 mb-1">Tutorial</div>
            <div className="text-xs text-gray-500">30s setup guide</div>
          </button>
          <button className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
            <Shield size={24} className="text-gray-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900 mb-1">Safety</div>
            <div className="text-xs text-gray-500">Warm-up & space</div>
          </button>
          <button className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
            <HelpCircle size={24} className="text-gray-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900 mb-1">FAQ</div>
            <div className="text-xs text-gray-500">Common issues</div>
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
