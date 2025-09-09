import { Play, Clock, Target, Zap, Heart, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TestsScreenProps {
  onTestSelect: (testId: string) => void;
}

export function TestsScreen({ onTestSelect }: TestsScreenProps) {
  const fitnessTests = [
    {
      id: 'vertical-jump',
      title: 'Vertical Jump',
      description: 'Measure your explosive power',
      duration: '2 mins',
      difficulty: 'Medium',
      icon: Target,
      color: '#007AFF',
      bgColor: '#E3F2FD',
      completed: true,
      lastScore: '45 cm',
      improvement: '+5 cm'
    },
    {
      id: 'shuttle-run',
      title: 'Shuttle Run',
      description: 'Test your agility and speed',
      duration: '3 mins',
      difficulty: 'Hard',
      icon: Zap,
      color: '#FF9500',
      bgColor: '#FFF4E6',
      completed: false,
      lastScore: null,
      improvement: null
    },
    {
      id: 'sit-ups',
      title: 'Sit-ups Test',
      description: 'Core strength assessment',
      duration: '2 mins',
      difficulty: 'Easy',
      icon: Target,
      color: '#34C759',
      bgColor: '#E8F5E8',
      completed: true,
      lastScore: '42 reps',
      improvement: '+8 reps'
    },
    {
      id: 'endurance-run',
      title: 'Endurance Run',
      description: '1.5km cardiovascular test',
      duration: '15 mins',
      difficulty: 'Hard',
      icon: Heart,
      color: '#FF3B30',
      bgColor: '#FFE6E6',
      completed: false,
      lastScore: null,
      improvement: null
    },
    {
      id: 'flexibility',
      title: 'Flexibility Test',
      description: 'Measure your range of motion',
      duration: '5 mins',
      difficulty: 'Easy',
      icon: Target,
      color: '#007AFF',
      bgColor: '#E3F2FD',
      completed: true,
      lastScore: '18 cm',
      improvement: '+3 cm'
    },
    {
      id: 'plank-hold',
      title: 'Plank Hold',
      description: 'Core stability and endurance',
      duration: '3 mins',
      difficulty: 'Medium',
      icon: Clock,
      color: '#34C759',
      bgColor: '#E8F5E8',
      completed: false,
      lastScore: null,
      improvement: null
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return { bg: '#E8F5E8', text: '#34C759' };
      case 'Medium': return { bg: '#FFF4E6', text: '#FF9500' };
      case 'Hard': return { bg: '#FFE6E6', text: '#FF3B30' };
      default: return { bg: '#E3F2FD', text: '#007AFF' };
    }
  };

  const handleTestClick = (testId: string) => {
    console.log(`Starting test: ${testId}`);
    onTestSelect(testId);
  };

  const completedTests = fitnessTests.filter(test => test.completed).length;
  const totalTests = fitnessTests.length;
  const completionPercentage = (completedTests / totalTests) * 100;

  return (
    <div className="flex-1 bg-white">
      {/* Header Section */}
      <div className="px-4 pt-6 pb-4 bg-gradient-to-r from-blue-50 to-white">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Fitness Tests</h1>
        <p className="text-gray-600 mb-4">Complete standardized assessments to track your progress</p>
        
        {/* Progress Overview */}
        <Card className="p-4 bg-white border-blue-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-gray-900">Overall Progress</h3>
            <span className="text-sm text-gray-600">{completedTests} of {totalTests} completed</span>
          </div>
          <Progress value={completionPercentage} className="h-2 mb-2" />
          <p className="text-sm text-gray-600">Keep going! You're doing great 💪</p>
        </Card>
      </div>

      {/* Instructions Banner */}
      <div className="px-4 mb-6">
        <Card className="p-4 bg-yellow-50 border-yellow-200">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-yellow-600 text-sm">ℹ️</span>
            </div>
            <div>
              <h3 className="font-medium text-yellow-900 mb-1">Before You Start</h3>
              <p className="text-sm text-yellow-800 leading-relaxed">
                Ensure good lighting, stable phone position, and wear appropriate athletic clothing. 
                Each test includes step-by-step video guidance.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Tests Grid */}
      <div className="px-4 pb-20">
        <div className="space-y-4">
          {fitnessTests.map((test) => {
            const Icon = test.icon;
            const difficultyColors = getDifficultyColor(test.difficulty);
            
            return (
              <Card 
                key={test.id}
                className="p-4 cursor-pointer transition-all duration-200 hover:shadow-md active:scale-95 border-gray-200"
                onClick={() => onTestSelect(test.id) }
              >
                <div className="flex items-center gap-4">
                  {/* Test Icon */}
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: test.bgColor }}
                  >
                    <Icon className="h-8 w-8" style={{ color: test.color }} />
                  </div>
                  
                  {/* Test Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-gray-900">{test.title}</h3>
                      {test.completed && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{test.description}</p>
                    
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{test.duration}</span>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="text-xs"
                        style={{ 
                          backgroundColor: difficultyColors.bg, 
                          color: difficultyColors.text 
                        }}
                      >
                        {test.difficulty}
                      </Badge>
                    </div>
                    
                    {/* Last Performance */}
                    {test.completed && test.lastScore && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Last: {test.lastScore}</span>
                        {test.improvement && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                            {test.improvement}
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    size="sm"
                    className="min-w-20"
                    style={{ 
                      backgroundColor: test.color,
                      color: 'white' 
                    }}
                  >
                    <Play className="h-4 w-4 mr-1" />
                    {test.completed ? 'Retry' : 'Start'}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Test Recording Interface Preview */}
      <div className="px-4 pb-6">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1603040640334-37a827144670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdGVzdCUyMGp1bXBpbmclMjBleGVyY2lzZXxlbnwxfHx8fDE3NTcyMjk2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Fitness test demonstration" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative p-6 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              AI-Powered Analysis
            </h3>
            <p className="text-sm text-gray-600">
              Our advanced AI analyzes your movements in real-time to ensure accurate measurements and prevent cheating.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}