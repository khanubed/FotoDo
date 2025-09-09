import { useState } from 'react';
import { Shield, Users, Crown, Heart, MessageSquare, Trophy, Star, Lock, UserCheck, ChevronRight, Award, Calendar, Video, BookOpen } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WomenSafeSpaceProps {
  onBack: () => void;
}

export function WomenSafeSpace({ onBack }: WomenSafeSpaceProps) {
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null);

  const womenLeaderboard = [
    {
      id: 'athlete-1',
      name: 'Priya Sharma',
      sport: 'Badminton',
      score: 2450,
      level: 'State',
      age: 16,
      location: 'Mumbai, MH',
      rank: 1,
      improvement: '+12%',
      avatar: '/placeholder-female.jpg'
    },
    {
      id: 'athlete-2',
      name: 'Ananya Patel',
      sport: 'Athletics',
      score: 2380,
      level: 'National',
      age: 18,
      location: 'Ahmedabad, GJ',
      rank: 2,
      improvement: '+8%',
      avatar: '/placeholder-female.jpg'
    },
    {
      id: 'athlete-3',
      name: 'Kavya Reddy',
      sport: 'Swimming',
      score: 2320,
      level: 'District',
      age: 15,
      location: 'Hyderabad, TG',
      rank: 3,
      improvement: '+15%',
      avatar: '/placeholder-female.jpg'
    },
    {
      id: 'athlete-4',
      name: 'Shreya Singh',
      sport: 'Tennis',
      score: 2285,
      level: 'State',
      age: 17,
      location: 'Delhi, DL',
      rank: 4,
      improvement: '+5%',
      avatar: '/placeholder-female.jpg'
    }
  ];

  const mentors = [
    {
      id: 'mentor-1',
      name: 'PV Sindhu',
      sport: 'Badminton',
      achievements: ['Olympic Silver Medalist', 'World Championship Gold', 'Padma Bhushan Awardee'],
      experience: '15+ years',
      specialties: ['Mental Strength', 'Competition Strategy', 'Career Guidance'],
      rating: 4.9,
      sessions: 150,
      languages: ['English', 'Hindi', 'Telugu'],
      availability: 'Available',
      avatar: '/placeholder-sindhu.jpg',
      quote: "Believe in yourself and your dreams will come true"
    },
    {
      id: 'mentor-2',
      name: 'Saina Nehwal',
      sport: 'Badminton',
      achievements: ['Olympic Bronze Medalist', 'Commonwealth Gold', 'Arjuna Award'],
      experience: '12+ years',
      specialties: ['Technical Skills', 'Injury Recovery', 'Performance Psychology'],
      rating: 4.8,
      sessions: 120,
      languages: ['English', 'Hindi'],
      availability: 'Available',
      avatar: '/placeholder-saina.jpg',
      quote: "Hard work and determination can overcome any obstacle"
    },
    {
      id: 'mentor-3',
      name: 'Hima Das',
      sport: 'Athletics',
      achievements: ['World U20 Champion', 'Asian Games Gold', 'Arjuna Award'],
      experience: '8+ years',
      specialties: ['Speed Training', 'Youth Development', 'Rural Athlete Support'],
      rating: 4.9,
      sessions: 95,
      languages: ['English', 'Hindi', 'Assamese'],
      availability: 'Busy',
      avatar: '/placeholder-hima.jpg',
      quote: "Every village girl can dream of representing India"
    },
    {
      id: 'mentor-4',
      name: 'Manu Bhaker',
      sport: 'Shooting',
      achievements: ['Olympic Bronze Medalist', 'Youth Olympic Champion'],
      experience: '10+ years',
      specialties: ['Focus & Concentration', 'Equipment Guidance', 'International Competition'],
      rating: 4.7,
      sessions: 80,
      languages: ['English', 'Hindi'],
      availability: 'Available',
      avatar: '/placeholder-manu.jpg',
      quote: "Precision and patience are the keys to success"
    }
  ];

  const forumTopics = [
    {
      id: 'topic-1',
      title: 'Balancing Sports and Family Expectations',
      author: 'Anonymous Athlete',
      replies: 24,
      lastActive: '2 hours ago',
      category: 'Family & Culture',
      isHot: true,
      tags: ['Family Support', 'Cultural Values', 'Career Balance']
    },
    {
      id: 'topic-2',
      title: 'Dealing with Period Pain During Training',
      author: 'Runner_Girl_16',
      replies: 18,
      lastActive: '4 hours ago',
      category: 'Health & Wellness',
      isHot: false,
      tags: ['Health', 'Training', 'Women Health']
    },
    {
      id: 'topic-3',
      title: 'Safe Training Spaces for Women',
      author: 'CricketQueen',
      replies: 31,
      lastActive: '1 day ago',
      category: 'Safety & Security',
      isHot: true,
      tags: ['Safety', 'Training Environment', 'Women Rights']
    },
    {
      id: 'topic-4',
      title: 'Scholarship Opportunities for Girls in Rural Areas',
      author: 'VillageChampion',
      replies: 45,
      lastActive: '2 days ago',
      category: 'Career & Education',
      isHot: false,
      tags: ['Scholarships', 'Rural Sports', 'Opportunities']
    }
  ];

  const safetyFeatures = [
    {
      id: 'privacy-1',
      title: 'Anonymous Discussions',
      description: 'Participate in forums without revealing your identity',
      icon: Shield,
      status: 'active'
    },
    {
      id: 'privacy-2',
      title: 'Verified Mentors Only',
      description: 'All mentors are background-checked female athletes',
      icon: UserCheck,
      status: 'active'
    },
    {
      id: 'privacy-3',
      title: 'Content Moderation',
      description: '24/7 monitoring for inappropriate content',
      icon: Lock,
      status: 'active'
    },
    {
      id: 'privacy-4',
      title: 'Safe Reporting',
      description: 'Report any concerns confidentially',
      icon: Heart,
      status: 'active'
    }
  ];

  const renderLeaderboard = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Women's Leaderboard</h2>
        <Button size="sm" variant="outline">View All Regions</Button>
      </div>

      <Card className="p-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="text-center">
          <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
          <h3 className="font-medium text-gray-900 mb-1">Celebrating Women Athletes</h3>
          <p className="text-sm text-gray-600">Showcasing female talent across India</p>
        </div>
      </Card>

      <div className="space-y-3">
        {womenLeaderboard.map((athlete, index) => (
          <Card key={athlete.id} className={`p-4 ${index === 0 ? 'border-yellow-200 bg-yellow-50' : ''}`}>
            <div className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                index === 0 ? 'bg-yellow-500 text-white' :
                index === 1 ? 'bg-gray-400 text-white' :
                index === 2 ? 'bg-amber-600 text-white' :
                'bg-blue-100 text-blue-600'
              }`}>
                {athlete.rank}
              </div>
              
              <Avatar className="w-12 h-12">
                <AvatarImage src={athlete.avatar} alt={athlete.name} />
                <AvatarFallback>{athlete.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-gray-900">{athlete.name}</h3>
                  <Badge variant="secondary" className="text-xs">{athlete.level}</Badge>
                  {index < 3 && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                </div>
                <p className="text-sm text-gray-600">{athlete.sport} • {athlete.location}</p>
              </div>
              
              <div className="text-right">
                <p className="font-medium text-gray-900">{athlete.score.toLocaleString()}</p>
                <p className="text-sm text-green-600">{athlete.improvement}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-4 text-center">
        <p className="text-sm text-gray-600 mb-3">
          Want to join the leaderboard? Complete your profile and start training!
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700">
          Start Your Journey
        </Button>
      </Card>
    </div>
  );

  const renderForums = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Discussion Forums</h2>
        <Button size="sm" variant="outline">New Topic</Button>
      </div>

      <Card className="p-4 bg-pink-50 border-pink-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
            <Shield className="h-5 w-5 text-pink-600" />
          </div>
          <div>
            <h3 className="font-medium text-pink-900">Safe Discussion Space</h3>
            <p className="text-sm text-pink-700">Open, respectful discussions moderated 24/7</p>
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        {forumTopics.map((topic) => (
          <Card key={topic.id} className="p-4 cursor-pointer hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-gray-900">{topic.title}</h3>
                  {topic.isHot && (
                    <Badge className="bg-red-100 text-red-800 text-xs">Hot</Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-2">by {topic.author}</p>
                <div className="flex items-center gap-2">
                  {topic.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{topic.replies} replies</span>
                </div>
                <span>Last active: {topic.lastActive}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {topic.category}
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderMentorship = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Mentorship Program</h2>
        <Button size="sm" variant="outline">My Sessions</Button>
      </div>

      <Card className="p-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="text-center">
          <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <h3 className="font-medium text-gray-900 mb-1">Connect with Champions</h3>
          <p className="text-sm text-gray-600">Learn from India's most successful female athletes</p>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        {mentors.map((mentor) => (
          <Card key={mentor.id} className="p-4">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={mentor.avatar} alt={mentor.name} />
                <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-gray-900">{mentor.name}</h3>
                  <Badge variant="secondary" className="text-xs">{mentor.sport}</Badge>
                  <Badge 
                    className={`text-xs ${
                      mentor.availability === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {mentor.availability}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2 italic">"{mentor.quote}"</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>{mentor.rating}</span>
                  </div>
                  <span>{mentor.sessions} sessions</span>
                  <span>{mentor.experience}</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-900 mb-2">Achievements:</p>
              <div className="flex flex-wrap gap-1">
                {mentor.achievements.map((achievement, index) => (
                  <Badge key={index} variant="secondary" className="text-xs bg-yellow-100 text-yellow-800">
                    <Award className="h-3 w-3 mr-1" />
                    {achievement}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-900 mb-2">Specialties:</p>
              <div className="flex flex-wrap gap-1">
                {mentor.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Languages: {mentor.languages.join(', ')}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Video className="h-4 w-4 mr-1" />
                  View Profile
                </Button>
                <Button 
                  size="sm" 
                  className="bg-purple-600 hover:bg-purple-700"
                  disabled={mentor.availability !== 'Available'}
                >
                  <Calendar className="h-4 w-4 mr-1" />
                  Book Session
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSafety = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Privacy & Safety</h2>
      </div>

      <Card className="p-4 bg-green-50 border-green-200">
        <div className="text-center">
          <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <h3 className="font-medium text-green-900 mb-1">Your Safety is Our Priority</h3>
          <p className="text-sm text-green-700">Comprehensive protection for all women athletes</p>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        {safetyFeatures.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <Card key={feature.id} className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
                
                <Badge className="bg-green-100 text-green-800">
                  {feature.status === 'active' ? 'Active' : 'Inactive'}
                </Badge>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6">
        <h3 className="font-medium text-gray-900 mb-4">Cultural Sensitivity Guidelines</h3>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
            <p>Respectful discussions that honor Indian family values and traditions</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
            <p>Support for athletes from all cultural and socioeconomic backgrounds</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
            <p>Zero tolerance for discrimination based on region, language, or religion</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
            <p>Safe space to discuss challenges unique to women in Indian sports</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-red-50 border-red-200">
        <h3 className="font-medium text-red-900 mb-3">Report & Support</h3>
        <p className="text-sm text-red-700 mb-4">
          If you experience any harassment, discrimination, or feel unsafe, please report it immediately.
        </p>
        <div className="flex gap-2">
          <Button size="sm" className="bg-red-600 hover:bg-red-700">
            Report Issue
          </Button>
          <Button size="sm" variant="outline">
            Emergency Support
          </Button>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="flex-1 bg-white">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
            <ChevronRight className="h-5 w-5 rotate-180" />
          </Button>
          <div>
            <h1 className="text-2xl font-medium text-gray-900">Women's Safe Space</h1>
            <p className="text-gray-600">Empowering women athletes across India</p>
          </div>
        </div>

        {/* Empowerment Banner */}
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100"></div>
          <div className="relative p-4 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              "The future of Indian sports is female"
            </h3>
            <p className="text-sm text-gray-600">
              Connect, learn, and grow in a safe, supportive environment
            </p>
          </div>
        </Card>
      </div>

      {/* Tabs Navigation */}
      <div className="px-4 pb-20">
        <Tabs defaultValue="leaderboard" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="leaderboard">Rankings</TabsTrigger>
            <TabsTrigger value="forums">Forums</TabsTrigger>
            <TabsTrigger value="mentorship">Mentors</TabsTrigger>
            <TabsTrigger value="safety">Safety</TabsTrigger>
          </TabsList>

          <TabsContent value="leaderboard">
            {renderLeaderboard()}
          </TabsContent>

          <TabsContent value="forums">
            {renderForums()}
          </TabsContent>

          <TabsContent value="mentorship">
            {renderMentorship()}
          </TabsContent>

          <TabsContent value="safety">
            {renderSafety()}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}