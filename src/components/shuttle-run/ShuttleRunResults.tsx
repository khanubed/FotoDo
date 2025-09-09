import React from 'react';
import { ArrowLeft, Trophy, Clock, Target, RotateCcw, Share2, Download } from 'lucide-react';

interface ResultsProps {
  testData: any;
  onRetry: () => void;
  onBack: () => void;
}

export function ShuttleRunResults({ testData, onRetry, onBack }: ResultsProps) {
  const mockResults = {
    time: '00:12.45',
    touches: 8,
    splits: 4,
    attempts: 1,
    grade: 'B+',
    improvement: '+0.8s'
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
          <h1 className="text-lg font-semibold text-gray-900">Shuttle Run Results</h1>
        </div>
      </div>

      <div className="px-4 space-y-4 pb-20">
        {/* Results Summary */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 text-center">
          <Trophy size={48} className="text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Great Job!</h2>
          <p className="text-gray-600 mb-4">You've completed the Shuttle Run test</p>
          
          <div className="bg-white bg-opacity-80 rounded-lg p-4">
            <div className="text-4xl font-mono font-bold text-blue-600 mb-1">
              {mockResults.time}
            </div>
            <div className="text-lg font-medium text-gray-900 mb-2">
              Grade: {mockResults.grade}
            </div>
            <div className="text-sm text-green-600">
              Improvement: {mockResults.improvement}
            </div>
          </div>
        </div>

        {/* Detailed Stats */}
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Details</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Clock size={24} className="text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{mockResults.time}</div>
              <div className="text-sm text-gray-600">Total Time</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Target size={24} className="text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{mockResults.touches}</div>
              <div className="text-sm text-gray-600">Touches</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">{mockResults.splits}</div>
              <div className="text-sm text-gray-600">Splits</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">{mockResults.attempts}</div>
              <div className="text-sm text-gray-600">Attempts</div>
            </div>
          </div>
        </div>

        {/* AI Analysis */}
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Analysis</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></div>
              <p className="text-sm text-gray-700">Excellent acceleration in the first 2 meters</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3"></div>
              <p className="text-sm text-gray-700">Consider improving turn technique for faster direction changes</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></div>
              <p className="text-sm text-gray-700">Consistent pacing throughout the test</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button 
            onClick={onRetry}
            className="w-full flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            <RotateCcw size={18} className="mr-2" />
            <span className="font-medium">Try Again</span>
          </button>
          
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <Share2 size={18} className="text-gray-600 mr-2" />
              <span className="font-medium text-gray-700">Share</span>
            </button>
            <button className="flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <Download size={18} className="text-gray-600 mr-2" />
              <span className="font-medium text-gray-700">Export</span>
            </button>
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
