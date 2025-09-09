import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ShuttleRunSetup } from './steps/Step1Setup';
import { ShuttleRunCalibration } from './steps/Step2Calibration';
import { ShuttleRunWarmup } from './steps/Step3Warmup';
import { ShuttleRunTestPrep } from './steps/Step4TestPrep';
import { ShuttleRunLiveTest } from './steps/Step5LiveTest';
import { ShuttleRunResults } from './ShuttleRunResults';

interface ShuttleRunContainerProps {
  onBack: () => void;
}

export function ShuttleRunContainer({ onBack }: ShuttleRunContainerProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [testData, setTestData] = useState({
    setupComplete: false,
    calibrationData: null,
    warmupComplete: false,
    testResults: null
  });

  const handleStepComplete = (stepData: any) => {
    setTestData(prev => ({ ...prev, ...stepData }));
    
    if (currentStep < 6) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleStepBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      onBack();
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ShuttleRunSetup 
            onComplete={handleStepComplete}
            onBack={handleStepBack}
          />
        );
      case 2:
        return (
          <ShuttleRunCalibration 
            onComplete={handleStepComplete}
            onBack={handleStepBack}
          />
        );
      case 3:
        return (
          <ShuttleRunWarmup 
            onComplete={handleStepComplete}
            onBack={handleStepBack}
          />
        );
      case 4:
        return (
          <ShuttleRunTestPrep 
            onComplete={handleStepComplete}
            onBack={handleStepBack}
          />
        );
      case 5:
        return (
          <ShuttleRunLiveTest 
            onComplete={handleStepComplete}
            onBack={handleStepBack}
          />
        );
      case 6:
        return (
          <ShuttleRunResults 
            testData={testData}
            onRetry={() => setCurrentStep(1)}
            onBack={onBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderCurrentStep()}
    </div>
  );
}
