import {
  Play,
  TrendingUp,
  Trophy,
  Users,
  ShoppingBag,
  MessageSquare,
  MapPin,
  Wifi,
  WifiOff,
  GraduationCap,
  BarChart,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomeScreenProps {
  onActionClick: (action: string) => void;
  userType: 'athlete' | 'parent' | 'coach' | 'official';
}

export function HomeScreen({ onActionClick, userType }: HomeScreenProps) {
  const quickActions = [
    {
      id: "start-test",
      title: "Start Test",
      description: "Begin fitness assessment",
      icon: Play,
      color: "#007AFF",
      bgColor: "#E3F2FD",
    },
    {
      id: "view-progress",
      title: "View Progress",
      description: "Track your improvement",
      icon: TrendingUp,
      color: "#34C759",
      bgColor: "#E8F5E8",
    },
    {
      id: "join-competition",
      title: "Join Competition",
      description: "Find local events",
      icon: Trophy,
      color: "#FF9500",
      bgColor: "#FFF4E6",
    },
    {
      id: "education",
      title: "Learn & Grow",
      description: "Educational resources",
      icon: GraduationCap,
      color: "#9C27B0",
      bgColor: "#F3E5F5",
    },
    {
      id: "equipment-shop",
      title: "Equipment Shop",
      description: "Buy sports gear",
      icon: ShoppingBag,
      color: "#34C759",
      bgColor: "#E8F5E8",
    },
    {
      id: "community",
      title: "Community",
      description: "Chat with athletes",
      icon: MessageSquare,
      color: "#FF9500",
      bgColor: "#FFF4E6",
    },
  ];

  const recentAchievements = [
    {
      title: "Speed Demon",
      description: "Completed 100m in under 15s",
      type: "speed",
    },
    {
      title: "Consistency King",
      description: "7-day training streak",
      type: "streak",
    },
    {
      title: "Jump Master",
      description: "New vertical jump record",
      type: "jump",
    },
  ];

  return (
    <div className="flex-1 bg-white">
      {/* Header Section */}
      <div className="px-4 pt-6 pb-4 bg-gradient-to-r from-blue-50 to-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">
              Hello, Rajesh! 👋
            </h1>
            <p className="text-gray-600 mt-1">
              Ready to break your records today?
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              Mumbai
            </span>
            <div className="flex items-center gap-1 ml-2">
              <WifiOff className="h-4 w-4 text-orange-500" />
              <span className="text-xs text-orange-600">
                Offline
              </span>
            </div>
          </div>
        </div>

        {/* Weather Banner */}
        <Card className="p-3 bg-blue-50 border-blue-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl">☀️</div>
              <div>
                <p className="font-medium text-blue-900">
                  Perfect weather for outdoor tests!
                </p>
                <p className="text-sm text-blue-700">
                  28°C • Low humidity • Light breeze
                </p>
              </div>
            </div>
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-800"
            >
              Optimal
            </Badge>
          </div>
        </Card>
      </div>

      {/* Quick Actions Grid */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-medium text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card
                key={action.id}
                className="p-4 cursor-pointer transition-all duration-200 hover:shadow-md active:scale-95 border-gray-200"
                onClick={() => onActionClick(action.id)}
                style={{ minHeight: "120px" }}
              >
                <div className="flex flex-col items-center text-center h-full justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: action.bgColor }}
                  >
                    <Icon
                      className="h-6 w-6"
                      style={{ color: action.color }}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      {action.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-tight">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Role-based Features */}
        {(userType === 'parent' || userType === 'coach') && (
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Family & Safety</h3>
            <div className="grid grid-cols-2 gap-4">
              <Card
                className="p-4 cursor-pointer transition-all duration-200 hover:shadow-md"
                onClick={() => onActionClick('family-dashboard')}
                style={{ minHeight: "120px" }}
              >
                <div className="flex flex-col items-center text-center h-full justify-between">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Family Dashboard</h3>
                    <p className="text-sm text-gray-600 leading-tight">Monitor child's progress</p>
                  </div>
                </div>
              </Card>

              <Card
                className="p-4 cursor-pointer transition-all duration-200 hover:shadow-md"
                onClick={() => onActionClick('women-safe-space')}
                style={{ minHeight: "120px" }}
              >
                <div className="flex flex-col items-center text-center h-full justify-between">
                  <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Women's Space</h3>
                    <p className="text-sm text-gray-600 leading-tight">Safe community for girls</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {userType === 'official' && (
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Administrative Tools</h3>
            <Card
              className="p-4 cursor-pointer transition-all duration-200 hover:shadow-md"
              onClick={() => onActionClick('sai-admin')}
              style={{ minHeight: "120px" }}
            >
              <div className="flex flex-col items-center text-center h-full justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-3">
                  <BarChart className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">SAI Admin Dashboard</h3>
                  <p className="text-sm text-gray-600 leading-tight">National talent management</p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Achievement Ticker */}
      <div className="px-4 pb-6">
        <h2 className="text-xl font-medium text-gray-900 mb-4">
          Recent Achievements 🏆
        </h2>
        <div className="space-y-3">
          {recentAchievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-orange-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-800"
                >
                  New!
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Motivational Banner */}
      <div className="px-4 pb-20">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1623208525215-a573aacb1560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0cmFpbmluZyUyMGF0aGxldGUlMjBydW5uaW5nfGVufDF8fHx8MTc1NzIyOTYxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Athlete training"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative p-6 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              "Champions are made in training, not in
              competition"
            </h3>
            <p className="text-sm text-gray-600">
              - P.V. Sindhu
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}