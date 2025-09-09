import { Home, Activity, Users, User, HelpCircle, Mic } from 'lucide-react';
import { Button } from './ui/button';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'tests', label: 'Tests', icon: Activity },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'help', label: 'Help', icon: HelpCircle },
  ];

  return (
    <>
      {/* Voice Command Floating Button */}
      <Button 
        className="fixed bottom-20 right-4 w-14 h-14 rounded-full shadow-lg z-20"
        style={{ backgroundColor: '#007AFF' }}
        size="icon"
      >
        <Mic className="h-6 w-6 text-white" />
      </Button>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-1 z-10">
        <div className="flex justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="flex flex-col items-center justify-center py-2 px-3 min-w-16 min-h-16 rounded-lg transition-colors"
                style={{
                  backgroundColor: isActive ? '#E3F2FD' : 'transparent',
                  color: isActive ? '#007AFF' : '#717182'
                }}
              >
                <Icon className="h-6 w-6 mb-1" />
                <span className="text-xs font-medium leading-tight">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}