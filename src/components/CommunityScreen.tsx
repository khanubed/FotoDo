import { MessageSquare, Trophy, Users, Star, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CommunityScreenProps {
  onFeatureClick: (feature: string) => void;
  userType: 'athlete' | 'parent' | 'coach' | 'official';
}

export function CommunityScreen({ onFeatureClick, userType }: CommunityScreenProps) {
  const forumPosts = [
    {
      id: 1,
      author: 'Priya Sharma',
      avatar: '/placeholder-avatar.jpg',
      title: 'Tips for improving vertical jump?',
      preview: 'I\'ve been stuck at 35cm for months. Any advice from experienced athletes?',
      replies: 12,
      likes: 8,
      timeAgo: '2h ago',
      category: 'Training Tips'
    },
    {
      id: 2,
      author: 'Arjun Patel',
      avatar: '/placeholder-avatar.jpg',
      title: 'Local football team forming in Mumbai',
      preview: 'Looking for dedicated players aged 16-20. Practice every evening at Oval Maidan.',
      replies: 25,
      likes: 15,
      timeAgo: '4h ago',
      category: 'Team Formation'
    },
    {
      id: 3,
      author: 'Sneha Reddy',
      avatar: '/placeholder-avatar.jpg',
      title: 'Nutrition plan for endurance runners',
      preview: 'Sharing my meal plan that helped me improve my 1.5km time by 30 seconds!',
      replies: 18,
      likes: 22,
      timeAgo: '6h ago',
      category: 'Nutrition'
    }
  ];

  const leaderboards = [
    {
      category: 'Regional (Mumbai)',
      entries: [
        { rank: 1, name: 'Rahul Kumar', score: '12.8s', test: '100m Sprint', avatar: '/placeholder-avatar.jpg' },
        { rank: 2, name: 'Aisha Khan', score: '13.2s', test: '100m Sprint', avatar: '/placeholder-avatar.jpg' },
        { rank: 3, name: 'Vijay Singh', score: '13.5s', test: '100m Sprint', avatar: '/placeholder-avatar.jpg' },
      ]
    },
    {
      category: 'Age Group (16-18)',
      entries: [
        { rank: 1, name: 'Neha Gupta', score: '48cm', test: 'Vertical Jump', avatar: '/placeholder-avatar.jpg' },
        { rank: 2, name: 'Rohit Sharma', score: '46cm', test: 'Vertical Jump', avatar: '/placeholder-avatar.jpg' },
        { rank: 3, name: 'Kavya Nair', score: '44cm', test: 'Vertical Jump', avatar: '/placeholder-avatar.jpg' },
      ]
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Mumbai Youth Athletics Championship',
      date: 'March 15, 2024',
      location: 'Shivaji Park, Mumbai',
      participants: 150,
      category: 'Track & Field',
      registrationOpen: true
    },
    {
      id: 2,
      title: 'Inter-School Football Tournament',
      date: 'March 22, 2024',
      location: 'Cooperage Ground, Mumbai',
      participants: 32,
      category: 'Football',
      registrationOpen: true
    },
    {
      id: 3,
      title: 'State Level Swimming Meet',
      date: 'April 5, 2024',
      location: 'Aquatic Complex, Pune',
      participants: 200,
      category: 'Swimming',
      registrationOpen: false
    }
  ];

  const coaches = [
    {
      id: 1,
      name: 'Coach Ramesh Kumar',
      specialization: 'Track & Field',
      experience: '8 years',
      rating: 4.8,
      location: 'Mumbai',
      price: '₹500/session',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      id: 2,
      name: 'Coach Sunita Devi',
      specialization: 'Swimming',
      experience: '12 years',
      rating: 4.9,
      location: 'Pune',
      price: '₹800/session',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      id: 3,
      name: 'Coach Vikram Singh',
      specialization: 'Football',
      experience: '6 years',
      rating: 4.7,
      location: 'Delhi',
      price: '₹400/session',
      avatar: '/placeholder-avatar.jpg'
    }
  ];

  return (
    <div className="flex-1 bg-white">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 bg-gradient-to-r from-purple-50 to-white">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Community</h1>
        <p className="text-gray-600">Connect with athletes, coaches, and sports enthusiasts</p>
      </div>

      {/* Tabs Navigation */}
      <div className="px-4">
        <Tabs defaultValue="forums" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="forums">Forums</TabsTrigger>
            <TabsTrigger value="leaderboards">Rankings</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="coaches">Coaches</TabsTrigger>
          </TabsList>

          {/* Forums Tab */}
          <TabsContent value="forums" className="space-y-4 pb-20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Discussion Forums</h2>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                New Post
              </Button>
            </div>

            {forumPosts.map((post) => (
              <Card key={post.id} className="p-4 cursor-pointer hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-purple-100 text-purple-600">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-gray-900 truncate">{post.title}</h3>
                      <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-600">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{post.preview}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.timeAgo}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.replies}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </Card>
            ))}

            <Card className="p-6 text-center bg-gradient-to-r from-purple-50 to-pink-50">
              <MessageSquare className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-medium text-gray-900 mb-2">Join the Conversation</h3>
              <p className="text-sm text-gray-600 mb-4">Share your experiences, ask questions, and help fellow athletes</p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Create Your First Post
              </Button>
            </Card>
          </TabsContent>

          {/* Leaderboards Tab */}
          <TabsContent value="leaderboards" className="space-y-6 pb-20">
            {leaderboards.map((board, index) => (
              <div key={index}>
                <h3 className="font-medium text-gray-900 mb-3">{board.category}</h3>
                <Card className="p-4">
                  <div className="space-y-3">
                    {board.entries.map((entry) => (
                      <div key={entry.rank} className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium"
                          style={{
                            backgroundColor: entry.rank === 1 ? '#FFD700' : entry.rank === 2 ? '#C0C0C0' : entry.rank === 3 ? '#CD7F32' : '#E5E7EB',
                            color: entry.rank <= 3 ? 'white' : '#374151'
                          }}
                        >
                          {entry.rank}
                        </div>
                        
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            {entry.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{entry.name}</p>
                          <p className="text-sm text-gray-600">{entry.test}</p>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-medium text-green-600">{entry.score}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-4 pb-20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Upcoming Events</h2>
              <Button size="sm" variant="outline">
                View All
              </Button>
            </div>

            {upcomingEvents.map((event) => (
              <Card key={event.id} className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="text-xs">
                        {event.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>{event.participants} participants</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className={event.registrationOpen ? "bg-green-600 hover:bg-green-700" : "bg-gray-400"}
                    disabled={!event.registrationOpen}
                  >
                    {event.registrationOpen ? 'Register' : 'Closed'}
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Coaches Tab */}
          <TabsContent value="coaches" className="space-y-4 pb-20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Find a Coach</h2>
              <Button size="sm" variant="outline">
                Filters
              </Button>
            </div>

            {coaches.map((coach) => (
              <Card key={coach.id} className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-lg">
                      {coach.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">{coach.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{coach.specialization} • {coach.experience}</p>
                    
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{coach.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{coach.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-green-600">{coach.price}</span>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Contact
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}