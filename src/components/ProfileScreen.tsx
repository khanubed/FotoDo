import { Settings, Trophy, Target, TrendingUp, Calendar, Award, Share2, Edit, Bell, Shield, Globe, Accessibility } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Switch } from './ui/switch';
import { Progress } from './ui/progress';

interface ProfileScreenProps {
  onSettingClick: (setting: string) => void;
  userType: 'athlete' | 'parent' | 'coach' | 'official';
}

export function ProfileScreen({ onSettingClick, userType }: ProfileScreenProps) {
  const userStats = [
    { label: 'Tests Completed', value: '12', icon: Target, color: '#007AFF' },
    { label: 'Achievements', value: '8', icon: Trophy, color: '#34C759' },
    { label: 'Training Streak', value: '15 days', icon: Calendar, color: '#FF9500' },
    { label: 'Improvement', value: '+22%', icon: TrendingUp, color: '#FF3B30' }
  ];

  const recentAchievements = [
    { title: 'Speed Demon', description: 'Completed 100m in under 15s', date: 'Today', icon: '⚡' },
    { title: 'Consistency King', description: '7-day training streak', date: 'Yesterday', icon: '🔥' },
    { title: 'Jump Master', description: 'New vertical jump record', date: '2 days ago', icon: '🦘' },
    { title: 'Endurance Warrior', description: 'Completed 1.5km run', date: '1 week ago', icon: '🏃' }
  ];

  const personalBests = [
    { test: 'Vertical Jump', score: '45 cm', improvement: '+5 cm', date: 'Mar 10' },
    { test: 'Sit-ups', score: '42 reps', improvement: '+8 reps', date: 'Mar 8' },
    { test: 'Flexibility', score: '18 cm', improvement: '+3 cm', date: 'Mar 5' },
    { test: '100m Sprint', score: '14.2s', improvement: '-0.8s', date: 'Mar 3' }
  ];

  const settingsGroups = [
    {
      title: 'Account',
      items: [
        { id: 'edit-profile', label: 'Edit Profile', icon: Edit, hasToggle: false },
        { id: 'notifications', label: 'Notifications', icon: Bell, hasToggle: true, enabled: true },
        { id: 'privacy', label: 'Privacy & Safety', icon: Shield, hasToggle: false }
      ]
    },
    {
      title: 'Accessibility',
      items: [
        { id: 'head-gestures', label: 'Head Gesture Navigation', icon: Accessibility, hasToggle: true, enabled: false },
        { id: 'voice-assistant', label: 'Voice Assistant', icon: Bell, hasToggle: true, enabled: true },
        { id: 'high-contrast', label: 'High Contrast Mode', icon: Settings, hasToggle: true, enabled: false },
        { id: 'large-text', label: 'Large Text', icon: Settings, hasToggle: true, enabled: false }
      ]
    },
    {
      title: 'General',
      items: [
        { id: 'language', label: 'Language (English)', icon: Globe, hasToggle: false },
        { id: 'share-app', label: 'Share App', icon: Share2, hasToggle: false }
      ]
    }
  ];

  return (
    <div className="flex-1 bg-white">
      {/* Profile Header */}
      <div className="px-4 pt-6 pb-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="w-20 h-20">
            <AvatarFallback className="bg-blue-100 text-blue-600 text-2xl">
              RK
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h1 className="text-2xl font-medium text-gray-900">Rajesh Kumar</h1>
            <p className="text-gray-600 mb-2">Age: 17 • Mumbai, Maharashtra</p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Track & Field
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Beginner Level
              </Badge>
            </div>
          </div>
          
          <Button size="sm" variant="outline" onClick={() => onSettingClick('edit-profile')}>
            <Edit className="h-4 w-4" />
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          {userStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-3 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-600">{stat.label}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="px-4 pb-20">
        {/* Recent Achievements */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Recent Achievements</h2>
            <Button size="sm" variant="outline">View All</Button>
          </div>
          
          <div className="space-y-3">
            {recentAchievements.slice(0, 3).map((achievement, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                  <span className="text-xs text-gray-500">{achievement.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Bests */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Personal Bests</h2>
          <Card className="p-4">
            <div className="space-y-4">
              {personalBests.map((best, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{best.test}</p>
                    <p className="text-sm text-gray-600">{best.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{best.score}</p>
                    <p className="text-sm text-green-600">{best.improvement}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Training Progress */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Training Progress</h2>
          <Card className="p-4">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Weekly Goal</span>
                  <span className="text-sm text-gray-600">5 of 7 sessions</span>
                </div>
                <Progress value={71} className="h-2" />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Monthly Target</span>
                  <span className="text-sm text-gray-600">18 of 25 tests</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
            </div>
          </Card>
        </div>

        {/* Settings Sections */}
        {settingsGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">{group.title}</h2>
            <Card className="p-0 overflow-hidden">
              {group.items.map((item, itemIndex) => {
                const Icon = item.icon;
                const isLast = itemIndex === group.items.length - 1;
                
                return (
                  <div 
                    key={item.id}
                    className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors ${!isLast ? 'border-b border-gray-100' : ''}`}
                    onClick={() => onSettingClick(item.id)}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-900">{item.label}</span>
                    </div>
                    
                    {item.hasToggle ? (
                      <Switch checked={item.enabled} />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full transform rotate-45"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </Card>
          </div>
        ))}

        {/* App Info */}
        <Card className="p-4 bg-gray-50">
          <div className="text-center">
            <h3 className="font-medium text-gray-900 mb-2">Sports Talent Assessment</h3>
            <p className="text-sm text-gray-600 mb-2">Version 1.0.0</p>
            <p className="text-xs text-gray-500">Empowering rural athletes across India</p>
          </div>
        </Card>
      </div>
    </div>
  );
}