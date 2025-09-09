import { useState } from 'react';
import { Book, Video, FileText, Trophy, Star, Play, Clock, Users, Award, ChevronRight, Download, BookOpen, GraduationCap, Target } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EducationScreenProps {
  onBack: () => void;
}

export function EducationScreen({ onBack }: EducationScreenProps) {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const eLearningModules = [
    {
      id: 'cricket-basics',
      title: 'Cricket Fundamentals',
      description: 'Learn the basics of cricket including rules, techniques, and strategies',
      duration: '2.5 hours',
      lessons: 12,
      level: 'Beginner',
      progress: 0,
      category: 'Sports Rules',
      instructor: 'Rahul Dravid',
      rating: 4.9,
      enrolled: 1250,
      color: '#007AFF'
    },
    {
      id: 'athletics-science',
      title: 'Sports Science for Athletes',
      description: 'Understanding biomechanics, nutrition, and training principles',
      duration: '4 hours',
      lessons: 18,
      level: 'Intermediate',
      progress: 35,
      category: 'Sports Science',
      instructor: 'Dr. Neeraj Chopra',
      rating: 4.8,
      enrolled: 890,
      color: '#34C759'
    },
    {
      id: 'mental-training',
      title: 'Mental Training for Peak Performance',
      description: 'Develop mental toughness and concentration techniques',
      duration: '3 hours',
      lessons: 15,
      level: 'All Levels',
      progress: 60,
      category: 'Psychology',
      instructor: 'Abhinav Bindra',
      rating: 4.9,
      enrolled: 2100,
      color: '#FF9500'
    },
    {
      id: 'injury-prevention',
      title: 'Injury Prevention & Recovery',
      description: 'Learn how to prevent sports injuries and recover effectively',
      duration: '3.5 hours',
      lessons: 16,
      level: 'All Levels',
      progress: 0,
      category: 'Health & Safety',
      instructor: 'Dr. Ashish Kaushik',
      rating: 4.7,
      enrolled: 780,
      color: '#FF3B30'
    }
  ];

  const videoTutorials = [
    {
      id: 'vertical-jump-form',
      title: 'Perfect Vertical Jump Technique',
      description: 'Master the correct form for maximum jump height',
      duration: '8:45',
      views: '45K',
      category: 'Fitness Tests',
      thumbnail: '/placeholder-video.jpg',
      difficulty: 'Beginner'
    },
    {
      id: 'sprint-technique',
      title: 'Sprint Starting Technique',
      description: 'Learn proper starting position and acceleration',
      duration: '12:30',
      views: '62K',
      category: 'Athletics',
      thumbnail: '/placeholder-video.jpg',
      difficulty: 'Intermediate'
    },
    {
      id: 'endurance-breathing',
      title: 'Breathing Techniques for Endurance',
      description: 'Optimize your breathing for long-distance running',
      duration: '15:20',
      views: '38K',
      category: 'Running',
      thumbnail: '/placeholder-video.jpg',
      difficulty: 'All Levels'
    },
    {
      id: 'flexibility-routine',
      title: 'Daily Flexibility Routine',
      description: 'Essential stretches for all athletes',
      duration: '20:15',
      views: '78K',
      category: 'Fitness',
      thumbnail: '/placeholder-video.jpg',
      difficulty: 'Beginner'
    }
  ];

  const saiGuidelines = [
    {
      id: 'talent-identification',
      title: 'SAI Talent Identification Guidelines',
      description: 'Official criteria and processes for talent identification',
      type: 'PDF',
      pages: 24,
      lastUpdated: 'March 2024',
      category: 'Official Guidelines'
    },
    {
      id: 'national-standards',
      title: 'National Sports Standards',
      description: 'Performance benchmarks for different age groups and sports',
      type: 'PDF',
      pages: 156,
      lastUpdated: 'January 2024',
      category: 'Standards'
    },
    {
      id: 'coaching-certification',
      title: 'Coaching Certification Requirements',
      description: 'Guidelines for sports coaching certifications in India',
      type: 'PDF',
      pages: 48,
      lastUpdated: 'February 2024',
      category: 'Certification'
    },
    {
      id: 'khelo-india-guidelines',
      title: 'Khelo India Program Guidelines',
      description: 'Complete guide to participating in Khelo India initiatives',
      type: 'PDF',
      pages: 72,
      lastUpdated: 'March 2024',
      category: 'Programs'
    }
  ];

  const careerPathways = [
    {
      id: 'scholarships',
      title: 'Sports Scholarships',
      description: 'Available scholarships for talented athletes',
      opportunities: [
        {
          name: 'Khelo India Scholarship',
          amount: '₹5,00,000/year',
          eligibility: 'Under 25, State level performance',
          deadline: 'June 30, 2024',
          type: 'Government'
        },
        {
          name: 'JSW Sports Excellence Program',
          amount: '₹8,00,000/year',
          eligibility: 'National level athletes',
          deadline: 'August 15, 2024',
          type: 'Private'
        },
        {
          name: 'Tata Sports Scholarship',
          amount: '₹3,00,000/year',
          eligibility: 'District level, Financial need',
          deadline: 'September 30, 2024',
          type: 'Corporate'
        }
      ]
    },
    {
      id: 'sponsorships',
      title: 'Sponsorship Opportunities',
      description: 'Connect with brands and sponsors',
      opportunities: [
        {
          name: 'Nike Athlete Sponsorship',
          amount: 'Equipment + ₹2,00,000',
          eligibility: 'State level performance',
          deadline: 'Rolling basis',
          type: 'Equipment'
        },
        {
          name: 'Gatorade Performance Program',
          amount: 'Nutrition + ₹1,50,000',
          eligibility: 'Endurance athletes',
          deadline: 'December 15, 2024',
          type: 'Nutrition'
        }
      ]
    },
    {
      id: 'career-paths',
      title: 'Career Pathways',
      description: 'Explore different career options in sports',
      opportunities: [
        {
          name: 'Professional Athlete',
          amount: 'Variable',
          eligibility: 'Elite performance',
          deadline: 'N/A',
          type: 'Performance'
        },
        {
          name: 'Sports Coaching',
          amount: '₹25,000-₹1,00,000/month',
          eligibility: 'Coaching certification',
          deadline: 'N/A',
          type: 'Education'
        },
        {
          name: 'Sports Management',
          amount: '₹30,000-₹80,000/month',
          eligibility: 'Management degree + sports experience',
          deadline: 'N/A',
          type: 'Management'
        }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return { bg: '#E8F5E8', text: '#34C759' };
      case 'Intermediate': return { bg: '#FFF4E6', text: '#FF9500' };
      case 'Advanced': return { bg: '#FFE6E6', text: '#FF3B30' };
      default: return { bg: '#E3F2FD', text: '#007AFF' };
    }
  };

  const renderELearningTab = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Available Courses</h2>
        <Button size="sm" variant="outline">
          View All
        </Button>
      </div>

      {eLearningModules.map((module) => (
        <Card 
          key={module.id} 
          className="p-4 cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => setSelectedCourse(module.id)}
        >
          <div className="flex gap-4">
            <div 
              className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${module.color}20` }}
            >
              <Book className="h-8 w-8" style={{ color: module.color }} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">{module.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{module.description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{module.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{module.lessons} lessons</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{module.enrolled}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>{module.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge 
                    variant="secondary" 
                    className="text-xs"
                    style={{ 
                      backgroundColor: getDifficultyColor(module.level).bg, 
                      color: getDifficultyColor(module.level).text 
                    }}
                  >
                    {module.level}
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-600">
                    {module.category}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2">
                  {module.progress > 0 && (
                    <div className="flex items-center gap-2">
                      <Progress value={module.progress} className="w-16 h-2" />
                      <span className="text-xs text-gray-600">{module.progress}%</span>
                    </div>
                  )}
                  <Button size="sm" style={{ backgroundColor: module.color }}>
                    {module.progress > 0 ? 'Continue' : 'Start'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderVideoTutorialsTab = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Technique Videos</h2>
        <Button size="sm" variant="outline">
          Browse Categories
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {videoTutorials.map((video) => (
          <Card key={video.id} className="p-4 cursor-pointer hover:shadow-md transition-shadow">
            <div className="flex gap-4">
              <div className="relative w-24 h-16 bg-gray-100 rounded-lg flex-shrink-0">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1700914299961-d8f91559d85d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZyUyMHNwb3J0cyUyMHRyYWluaW5nfGVufDF8fHx8MTc1NzQwNDI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={video.title} 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <Play className="h-4 w-4 text-gray-700 ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 mb-1">{video.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{video.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <span>{video.views} views</span>
                  <Badge 
                    variant="secondary" 
                    className="text-xs"
                    style={{ 
                      backgroundColor: getDifficultyColor(video.difficulty).bg, 
                      color: getDifficultyColor(video.difficulty).text 
                    }}
                  >
                    {video.difficulty}
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-600">
                    {video.category}
                  </Badge>
                </div>
              </div>
              
              <Button size="sm" className="bg-red-600 hover:bg-red-700 self-start">
                <Play className="h-4 w-4 mr-1" />
                Watch
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSAIGuidelinesTab = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Official Documentation</h2>
        <Button size="sm" variant="outline">
          Download All
        </Button>
      </div>

      <Card className="p-4 bg-blue-50 border-blue-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Award className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-blue-900">SAI Certified Resources</h3>
            <p className="text-sm text-blue-700">Official guidelines from Sports Authority of India</p>
          </div>
        </div>
      </Card>

      {saiGuidelines.map((guideline) => (
        <Card key={guideline.id} className="p-4 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="h-6 w-6 text-red-600" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 mb-1">{guideline.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{guideline.description}</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{guideline.pages} pages</span>
                <span>Updated: {guideline.lastUpdated}</span>
                <Badge variant="secondary" className="text-xs bg-green-100 text-green-600">
                  {guideline.category}
                </Badge>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <Button size="sm" variant="outline">
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <BookOpen className="h-4 w-4 mr-1" />
                View
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderCareerPathwaysTab = () => (
    <div className="space-y-6">
      {careerPathways.map((pathway) => (
        <div key={pathway.id}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">{pathway.title}</h2>
            <Button size="sm" variant="outline">View All</Button>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">{pathway.description}</p>
          
          <div className="space-y-3">
            {pathway.opportunities.map((opportunity, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-gray-900">{opportunity.name}</h3>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${
                          opportunity.type === 'Government' ? 'bg-green-100 text-green-800' :
                          opportunity.type === 'Private' ? 'bg-blue-100 text-blue-800' :
                          opportunity.type === 'Corporate' ? 'bg-purple-100 text-purple-800' :
                          'bg-orange-100 text-orange-800'
                        }`}
                      >
                        {opportunity.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Eligibility: {opportunity.eligibility}</p>
                    <p className="text-sm text-gray-600">Deadline: {opportunity.deadline}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-medium text-green-600">{opportunity.amount}</p>
                    <Button size="sm" className="mt-2 bg-green-600 hover:bg-green-700">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
      
      <Card className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="text-center">
          <GraduationCap className="h-12 w-12 text-orange-600 mx-auto mb-3" />
          <h3 className="font-medium text-gray-900 mb-2">Need Guidance?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Connect with our career counselors to explore the best pathways for your sports journey
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700">
            Book Career Counseling
          </Button>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="flex-1 bg-white">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
            <ChevronRight className="h-5 w-5 rotate-180" />
          </Button>
          <div>
            <h1 className="text-2xl font-medium text-gray-900">Educational Resources</h1>
            <p className="text-gray-600">Learn, grow, and excel in your sports journey</p>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="px-4 py-6">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1700914299961-d8f91559d85d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZyUyMHNwb3J0cyUyMHRyYWluaW5nfGVufDF8fHx8MTc1NzQwNDI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Sports education and training" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative p-6 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              "Education is the most powerful weapon you can use to change the world"
            </h3>
            <p className="text-sm text-gray-600">- Nelson Mandela</p>
          </div>
        </Card>
      </div>

      {/* Tabs Content */}
      <div className="px-4 pb-20">
        <Tabs defaultValue="elearning" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="elearning">Courses</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="sai">SAI Docs</TabsTrigger>
            <TabsTrigger value="career">Careers</TabsTrigger>
          </TabsList>

          <TabsContent value="elearning">
            {renderELearningTab()}
          </TabsContent>

          <TabsContent value="videos">
            {renderVideoTutorialsTab()}
          </TabsContent>

          <TabsContent value="sai">
            {renderSAIGuidelinesTab()}
          </TabsContent>

          <TabsContent value="career">
            {renderCareerPathwaysTab()}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}