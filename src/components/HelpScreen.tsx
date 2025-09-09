import { HelpCircle, Book, Phone, MessageCircle, Video, FileText, ExternalLink, ChevronRight, Headphones, Globe, Shield } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

interface HelpScreenProps {
  onHelpClick: (section: string) => void;
}

export function HelpScreen({ onHelpClick }: HelpScreenProps) {
  const helpSections = [
    {
      id: 'tutorials',
      title: 'Video Tutorials',
      description: 'Step-by-step guides for all tests',
      icon: Video,
      color: '#007AFF',
      bgColor: '#E3F2FD',
      items: ['How to record tests', 'Proper form guidance', 'Camera positioning']
    },
    {
      id: 'faq',
      title: 'FAQ',
      description: 'Common questions answered',
      icon: HelpCircle,
      color: '#34C759',
      bgColor: '#E8F5E8',
      items: ['Test requirements', 'Scoring system', 'Technical issues']
    },
    {
      id: 'contact',
      title: 'Contact Support',
      description: 'Get help from our team',
      icon: MessageCircle,
      color: '#FF9500',
      bgColor: '#FFF4E6',
      items: ['Chat support', 'Email support', 'Phone support']
    },
    {
      id: 'voice-help',
      title: 'Voice Assistant',
      description: 'Audio navigation help',
      icon: Headphones,
      color: '#007AFF',
      bgColor: '#E3F2FD',
      items: ['Voice commands', 'Audio instructions', 'Navigation help']
    },
    {
      id: 'accessibility',
      title: 'Accessibility Guide',
      description: 'Features for all users',
      icon: Globe,
      color: '#34C759',
      bgColor: '#E8F5E8',
      items: ['Head gestures', 'High contrast', 'Large text options']
    },
    {
      id: 'safety',
      title: 'Safety & Privacy',
      description: 'Your data protection',
      icon: Shield,
      color: '#FF3B30',
      bgColor: '#FFE6E6',
      items: ['Privacy policy', 'Safety guidelines', 'Report issues']
    }
  ];

  const faqItems = [
    {
      question: 'How does the AI analysis work?',
      answer: 'Our AI system uses computer vision to analyze your movements during fitness tests. It tracks key body points, measures distances and timing, and ensures proper form. The analysis happens on your device for privacy and works offline.'
    },
    {
      question: 'What if I don\'t have good internet connection?',
      answer: 'The app works completely offline! You can record tests, get instant analysis, and view results without internet. Your data syncs automatically when you\'re back online.'
    },
    {
      question: 'How accurate are the measurements?',
      answer: 'Our AI achieves 95%+ accuracy when tests are recorded properly. Make sure you have good lighting, stable phone position, and follow the setup instructions for each test.'
    },
    {
      question: 'Can the app detect cheating?',
      answer: 'Yes, our advanced AI algorithms can identify manipulated videos, incorrect movements, and inconsistent patterns. This ensures fair comparison with other athletes.'
    },
    {
      question: 'What equipment do I need?',
      answer: 'You only need your smartphone and basic sports attire. Some tests may require simple items like a wall for wall-sit or an open space for running tests.'
    },
    {
      question: 'How do I improve my scores?',
      answer: 'The app provides personalized training recommendations, connects you with coaches, and offers nutrition guidance. Regular practice and following the improvement plans will help boost your performance.'
    }
  ];

  const supportOptions = [
    {
      type: 'Chat Support',
      description: 'Instant help via chat',
      availability: '24/7 Available',
      icon: MessageCircle,
      action: 'Start Chat'
    },
    {
      type: 'Phone Support',
      description: 'Speak with our team',
      availability: '9 AM - 9 PM',
      icon: Phone,
      action: 'Call Now'
    },
    {
      type: 'Video Call',
      description: 'Screen sharing help',
      availability: 'By appointment',
      icon: Video,
      action: 'Schedule'
    }
  ];

  const quickLinks = [
    { title: 'Test Instructions PDF', icon: FileText, external: true },
    { title: 'Community Guidelines', icon: Book, external: false },
    { title: 'Privacy Policy', icon: Shield, external: true },
    { title: 'Terms of Service', icon: FileText, external: true }
  ];

  return (
    <div className="flex-1 bg-white">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 bg-gradient-to-r from-green-50 to-white">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Help & Support</h1>
        <p className="text-gray-600">Get assistance, learn features, and find answers</p>
      </div>

      <div className="px-4 pb-20">
        {/* Emergency Support Banner */}
        <Card className="p-4 mb-6 bg-red-50 border-red-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <Phone className="h-5 w-5 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-red-900">Need Immediate Help?</h3>
              <p className="text-sm text-red-700">Call our emergency support line</p>
            </div>
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              Call Now
            </Button>
          </div>
        </Card>

        {/* Help Sections Grid */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">How Can We Help?</h2>
          <div className="grid grid-cols-2 gap-4">
            {helpSections.map((section) => {
              const Icon = section.icon;
              return (
                <Card 
                  key={section.id}
                  className="p-4 cursor-pointer transition-all duration-200 hover:shadow-md active:scale-95"
                  onClick={() => onHelpClick(section.id)}
                >
                  <div className="text-center">
                    <div 
                      className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                      style={{ backgroundColor: section.bgColor }}
                    >
                      <Icon className="h-6 w-6" style={{ color: section.color }} />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">{section.title}</h3>
                    <p className="text-xs text-gray-600 leading-tight">{section.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Frequently Asked Questions</h2>
          <Card className="p-0 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                  <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                    <span className="text-left font-medium text-gray-900">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* Support Options */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Contact Support</h2>
          <div className="space-y-3">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="p-4 cursor-pointer hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{option.type}</h3>
                      <p className="text-sm text-gray-600 mb-1">{option.description}</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        {option.availability}
                      </Badge>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      {option.action}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h2>
          <Card className="p-0 overflow-hidden">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              const isLast = index === quickLinks.length - 1;
              
              return (
                <div 
                  key={index}
                  className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors ${!isLast ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-gray-600" />
                    <span className="font-medium text-gray-900">{link.title}</span>
                    {link.external && (
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              );
            })}
          </Card>
        </div>

        {/* Voice Assistant Help */}
        <Card className="p-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Headphones className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-medium text-gray-900">Voice Assistant Active</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Say "Help me" at any time to get audio assistance. The voice assistant can guide you through tests, 
            navigate the app, and answer questions.
          </p>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              Voice Tutorial
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Try Voice Help
            </Button>
          </div>
        </Card>

        {/* Language Support */}
        <Card className="p-4 mt-6">
          <div className="text-center">
            <Globe className="h-8 w-8 text-gray-600 mx-auto mb-2" />
            <h3 className="font-medium text-gray-900 mb-2">Multilingual Support</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get help in Hindi, English, and regional languages
            </p>
            <div className="flex justify-center gap-2">
              <Badge variant="secondary">हिंदी</Badge>
              <Badge variant="secondary">English</Badge>
              <Badge variant="secondary">मराठी</Badge>
              <Badge variant="secondary">தமிழ்</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}