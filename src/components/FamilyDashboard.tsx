import { useState } from 'react';
import { Shield, Users, Eye, Bell, MessageSquare, Calendar, TrendingUp, Award, Clock, MapPin, Phone, AlertTriangle, Heart, Lock, ChevronRight, Settings } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Alert, AlertDescription } from './ui/alert';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FamilyDashboardProps {
  onBack: () => void;
  userType: 'parent' | 'guardian';
}

export function FamilyDashboard({ onBack, userType }: FamilyDashboardProps) {
  const [notifications, setNotifications] = useState({
    testResults: true,
    coachMessages: true,
    safetyAlerts: true,
    progressUpdates: true,
    eventReminders: true
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'limited',
    locationSharing: false,
    contactPermissions: 'coaches-only',
    photoSharing: false,
    performanceSharing: 'family-only'
  });

  const childrenData = [
    {
      id: 'child-1',
      name: 'Aarav Sharma',
      age: 14,
      sports: ['Cricket', 'Athletics'],
      level: 'District',
      lastActive: '2 hours ago',
      recentTest: 'Vertical Jump',
      testScore: 85,
      coachName: 'Rahul Dravid',
      safetyStatus: 'secure',
      todayActivity: 'Completed 2 tests, 1 practice session',
      upcomingEvents: ['State Selection - March 15', 'Training Camp - March 20'],
      profileImage: '/placeholder-child.jpg'
    },
    {
      id: 'child-2',
      name: 'Priya Sharma',
      age: 16,
      sports: ['Badminton', 'Tennis'],
      level: 'State',
      lastActive: '30 mins ago',
      recentTest: 'Agility Test',
      testScore: 92,
      coachName: 'Saina Nehwal',
      safetyStatus: 'secure',
      todayActivity: 'Attended mentorship session',
      upcomingEvents: ['National Tournament - April 5'],
      profileImage: '/placeholder-child.jpg'
    }
  ];

  const safetyReports = [
    {
      id: 'report-1',
      type: 'location',
      message: 'Aarav checked in at Delhi Sports Complex',
      timestamp: '10:30 AM',
      status: 'safe',
      icon: MapPin
    },
    {
      id: 'report-2',
      type: 'coach-interaction',
      message: 'Training session with coach Rahul Dravid completed',
      timestamp: '9:00 AM',
      status: 'safe',
      icon: Users
    },
    {
      id: 'report-3',
      type: 'test-completion',
      message: 'Priya completed fitness assessment safely',
      timestamp: 'Yesterday',
      status: 'safe',
      icon: Award
    }
  ];

  const coachMessages = [
    {
      id: 'msg-1',
      coachName: 'Rahul Dravid',
      childName: 'Aarav',
      message: 'Aarav showed excellent improvement in his batting technique today. Please ensure he gets proper rest.',
      timestamp: '2 hours ago',
      priority: 'normal',
      read: false
    },
    {
      id: 'msg-2',
      coachName: 'Saina Nehwal',
      childName: 'Priya',
      message: 'Priya is ready for the next level training. I recommend increasing practice frequency.',
      timestamp: '1 day ago',
      priority: 'high',
      read: true
    }
  ];

  const renderDashboardOverview = () => (
    <div className="space-y-6">
      {/* Family Summary Cards */}
      <div className="grid grid-cols-1 gap-4">
        {childrenData.map((child) => (
          <Card key={child.id} className="p-4">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={child.profileImage} alt={child.name} />
                <AvatarFallback>{child.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-gray-900">{child.name}</h3>
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                    <Shield className="h-3 w-3 mr-1" />
                    Safe
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">Age {child.age} • {child.sports.join(', ')}</p>
              </div>
              <div className="text-right">
                <Badge variant="secondary" className="text-xs">{child.level} Level</Badge>
                <p className="text-xs text-gray-500 mt-1">Active {child.lastActive}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Recent Test</span>
                </div>
                <p className="text-xs text-blue-700">{child.recentTest}</p>
                <p className="text-lg font-medium text-blue-900">{child.testScore}%</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-900">Coach</span>
                </div>
                <p className="text-xs text-green-700">{child.coachName}</p>
                <Button size="sm" variant="ghost" className="text-xs p-0 h-auto text-green-600">
                  Contact
                </Button>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-700 mb-2">Today's Activity:</p>
              <p className="text-xs text-gray-600">{child.todayActivity}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-600">
                Next: {child.upcomingEvents[0]}
              </div>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Safety Status */}
      <Card className="p-4 bg-green-50 border-green-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <Shield className="h-5 w-5 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-green-900">All Children Safe</h3>
            <p className="text-sm text-green-700">Last safety check: 5 minutes ago</p>
          </div>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            View Report
          </Button>
        </div>
      </Card>
    </div>
  );

  const renderProgressMonitoring = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Progress Monitoring</h2>
        <Button size="sm" variant="outline">Export Report</Button>
      </div>

      {childrenData.map((child) => (
        <Card key={child.id} className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Avatar className="w-10 h-10">
              <AvatarImage src={child.profileImage} alt={child.name} />
              <AvatarFallback>{child.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-gray-900">{child.name}</h3>
              <p className="text-sm text-gray-600">{child.sports.join(', ')} Athlete</p>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Physical Fitness</h4>
              <Progress value={child.testScore} className="mb-2" />
              <p className="text-sm text-blue-700">{child.testScore}% - Above Average</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">Skill Development</h4>
              <Progress value={78} className="mb-2" />
              <p className="text-sm text-green-700">78% - Progressing Well</p>
            </div>
          </div>

          {/* Weekly Activity Summary */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">This Week's Activities</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Training Sessions</span>
                <Badge variant="secondary">5/5 Completed</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Fitness Tests</span>
                <Badge variant="secondary">3/3 Completed</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Study Hours</span>
                <Badge variant="secondary">12/15 Hours</Badge>
              </div>
            </div>
          </div>

          {/* Recent Achievements */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Recent Achievements</h4>
            <div className="flex gap-2">
              <Badge className="bg-yellow-100 text-yellow-800">
                <Trophy className="h-3 w-3 mr-1" />
                Best Score This Month
              </Badge>
              <Badge className="bg-purple-100 text-purple-800">
                <Award className="h-3 w-3 mr-1" />
                Consistency Award
              </Badge>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderSafetySettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Safety & Privacy Settings</h2>
      </div>

      {/* Privacy Controls */}
      <Card className="p-6">
        <h3 className="font-medium text-gray-900 mb-4">Privacy Controls</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Profile Visibility</p>
              <p className="text-sm text-gray-600">Control who can see child's profile</p>
            </div>
            <select className="border rounded-md px-3 py-1 text-sm">
              <option value="limited">Limited (Family + Coaches)</option>
              <option value="coaches">Coaches Only</option>
              <option value="private">Private</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Location Sharing</p>
              <p className="text-sm text-gray-600">Share location during training</p>
            </div>
            <Switch 
              checked={privacySettings.locationSharing}
              onCheckedChange={(checked) => setPrivacySettings({...privacySettings, locationSharing: checked})}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Photo Sharing</p>
              <p className="text-sm text-gray-600">Allow coaches to share photos</p>
            </div>
            <Switch 
              checked={privacySettings.photoSharing}
              onCheckedChange={(checked) => setPrivacySettings({...privacySettings, photoSharing: checked})}
            />
          </div>
        </div>
      </Card>

      {/* Content Filtering */}
      <Card className="p-6">
        <h3 className="font-medium text-gray-900 mb-4">Content Filtering</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Community Discussions</p>
              <p className="text-sm text-gray-600">Filter inappropriate content</p>
            </div>
            <Switch defaultChecked={true} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Direct Messages</p>
              <p className="text-sm text-gray-600">Only allow verified coaches</p>
            </div>
            <Switch defaultChecked={true} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Age-Appropriate Content</p>
              <p className="text-sm text-gray-600">Filter content by age</p>
            </div>
            <Switch defaultChecked={true} />
          </div>
        </div>
      </Card>

      {/* Emergency Contacts */}
      <Card className="p-6">
        <h3 className="font-medium text-gray-900 mb-4">Emergency Contacts</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gray-600" />
              <div>
                <p className="font-medium">Primary Guardian</p>
                <p className="text-sm text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <Button size="sm" variant="outline">Edit</Button>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gray-600" />
              <div>
                <p className="font-medium">Secondary Contact</p>
                <p className="text-sm text-gray-600">+91 87654 32109</p>
              </div>
            </div>
            <Button size="sm" variant="outline">Edit</Button>
          </div>

          <Button variant="outline" className="w-full">
            + Add Emergency Contact
          </Button>
        </div>
      </Card>
    </div>
  );

  const renderCommunicationHub = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Communication Hub</h2>
        <Button size="sm" variant="outline">New Message</Button>
      </div>

      {/* Recent Safety Reports */}
      <Card className="p-6">
        <h3 className="font-medium text-gray-900 mb-4">Recent Safety Reports</h3>
        <div className="space-y-3">
          {safetyReports.map((report) => {
            const IconComponent = report.icon;
            return (
              <div key={report.id} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <IconComponent className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-900">{report.message}</p>
                  <p className="text-xs text-green-700">{report.timestamp}</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Safe</Badge>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Coach Messages */}
      <Card className="p-6">
        <h3 className="font-medium text-gray-900 mb-4">Messages from Coaches</h3>
        <div className="space-y-4">
          {coachMessages.map((message) => (
            <div key={message.id} className={`p-4 rounded-lg border ${!message.read ? 'bg-blue-50 border-blue-200' : 'bg-gray-50'}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-gray-900">{message.coachName}</p>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-600">{message.childName}</p>
                  {message.priority === 'high' && (
                    <Badge className="bg-red-100 text-red-800">High Priority</Badge>
                  )}
                </div>
                <span className="text-xs text-gray-500">{message.timestamp}</span>
              </div>
              <p className="text-sm text-gray-700 mb-3">{message.message}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">Reply</Button>
                <Button size="sm" variant="outline">Call Coach</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="p-6">
        <h3 className="font-medium text-gray-900 mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Test Results</p>
              <p className="text-sm text-gray-600">Get notified when tests are completed</p>
            </div>
            <Switch 
              checked={notifications.testResults}
              onCheckedChange={(checked) => setNotifications({...notifications, testResults: checked})}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Coach Messages</p>
              <p className="text-sm text-gray-600">Instant notifications from coaches</p>
            </div>
            <Switch 
              checked={notifications.coachMessages}
              onCheckedChange={(checked) => setNotifications({...notifications, coachMessages: checked})}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Safety Alerts</p>
              <p className="text-sm text-gray-600">Important safety notifications</p>
            </div>
            <Switch 
              checked={notifications.safetyAlerts}
              onCheckedChange={(checked) => setNotifications({...notifications, safetyAlerts: checked})}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Progress Updates</p>
              <p className="text-sm text-gray-600">Weekly progress summaries</p>
            </div>
            <Switch 
              checked={notifications.progressUpdates}
              onCheckedChange={(checked) => setNotifications({...notifications, progressUpdates: checked})}
            />
          </div>
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
            <h1 className="text-2xl font-medium text-gray-900">
              Family Dashboard
            </h1>
            <p className="text-gray-600">
              {userType === 'parent' ? 'Parent' : 'Guardian'} Safety & Monitoring Center
            </p>
          </div>
        </div>

        {/* Cultural Values Banner */}
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1646831691957-58c19abcb24f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBzYWZldHklMjBwYXJlbnRhbCUyMGNvbnRyb2wlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3NDA0NzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Family safety and values" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative p-4 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              "Family values and child safety are our top priorities"
            </h3>
            <p className="text-sm text-gray-600">
              Respecting Indian family traditions while ensuring modern safety standards
            </p>
          </div>
        </Card>
      </div>

      {/* Tabs Navigation */}
      <div className="px-4 pb-20">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="safety">Safety</TabsTrigger>
            <TabsTrigger value="communication">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            {renderDashboardOverview()}
          </TabsContent>

          <TabsContent value="progress">
            {renderProgressMonitoring()}
          </TabsContent>

          <TabsContent value="safety">
            {renderSafetySettings()}
          </TabsContent>

          <TabsContent value="communication">
            {renderCommunicationHub()}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}