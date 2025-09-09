import { useState } from 'react';
import { BarChart, Users, TrendingUp, MapPin, FileText, CheckCircle, AlertTriangle, Download, Filter, Search, Calendar, Award, Target, Database, Globe, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SAIAdminDashboardProps {
  onBack: () => void;
}

export function SAIAdminDashboard({ onBack }: SAIAdminDashboardProps) {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedSport, setSelectedSport] = useState('all');
  const [timeRange, setTimeRange] = useState('3months');

  const nationalStats = {
    totalAthletes: 45678,
    activeTests: 1234,
    pendingVerifications: 89,
    talentIdentified: 567,
    statePrograms: 28,
    monthlyGrowth: 12.5,
    genderDistribution: { male: 55, female: 45 },
    ageDistribution: { 
      'Under 14': 25, 
      '14-16': 35, 
      '17-19': 28, 
      'Above 19': 12 
    }
  };

  const regionalData = [
    {
      state: 'Uttar Pradesh',
      athletes: 6789,
      growth: '+15%',
      topSport: 'Cricket',
      talentScore: 4.2,
      programs: 5,
      verified: 90
    },
    {
      state: 'Maharashtra',
      athletes: 5432,
      growth: '+12%',
      topSport: 'Athletics',
      talentScore: 4.5,
      programs: 7,
      verified: 95
    },
    {
      state: 'Tamil Nadu',
      athletes: 4321,
      growth: '+18%',
      topSport: 'Badminton',
      talentScore: 4.3,
      programs: 6,
      verified: 88
    },
    {
      state: 'Gujarat',
      athletes: 3876,
      growth: '+10%',
      topSport: 'Football',
      talentScore: 4.1,
      programs: 4,
      verified: 92
    },
    {
      state: 'Karnataka',
      athletes: 3654,
      growth: '+14%',
      topSport: 'Athletics',
      talentScore: 4.4,
      programs: 6,
      verified: 91
    }
  ];

  const pendingVerifications = [
    {
      id: 'verify-1',
      athleteName: 'Rahul Kumar',
      age: 16,
      sport: 'Cricket',
      state: 'Punjab',
      testType: 'Vertical Jump',
      score: 88,
      submittedDate: '2024-03-10',
      priority: 'high',
      aiConfidence: 95,
      flaggedIssues: []
    },
    {
      id: 'verify-2',
      athleteName: 'Priya Sharma',
      age: 15,
      sport: 'Athletics',
      state: 'Haryana',
      testType: 'Sprint Speed',
      score: 92,
      submittedDate: '2024-03-09',
      priority: 'medium',
      aiConfidence: 87,
      flaggedIssues: ['lighting_quality']
    },
    {
      id: 'verify-3',
      athleteName: 'Arjun Patel',
      age: 17,
      sport: 'Swimming',
      state: 'Gujarat',
      testType: 'Endurance',
      score: 85,
      submittedDate: '2024-03-08',
      priority: 'low',
      aiConfidence: 78,
      flaggedIssues: ['form_deviation', 'timing_accuracy']
    }
  ];

  const talentPipeline = [
    {
      level: 'District',
      count: 12456,
      percentage: 27,
      color: '#34C759'
    },
    {
      level: 'State',
      count: 8234,
      percentage: 18,
      color: '#FF9500'
    },
    {
      level: 'National',
      count: 2876,
      percentage: 6,
      color: '#FF3B30'
    },
    {
      level: 'International',
      count: 456,
      percentage: 1,
      color: '#007AFF'
    }
  ];

  const governmentPrograms = [
    {
      id: 'khelo-india',
      name: 'Khelo India',
      participants: 15678,
      budget: '₹500 Cr',
      status: 'Active',
      integration: 'Connected',
      lastSync: '2 hours ago'
    },
    {
      id: 'nsts',
      name: 'NSTS',
      participants: 8924,
      budget: '₹200 Cr',
      status: 'Active',
      integration: 'Connected',
      lastSync: '1 hour ago'
    },
    {
      id: 'top-scheme',
      name: 'TOP Scheme',
      participants: 234,
      budget: '₹150 Cr',
      status: 'Active',
      integration: 'Partial',
      lastSync: '6 hours ago'
    },
    {
      id: 'reliance',
      name: 'Reliance Foundation',
      participants: 1567,
      budget: '₹100 Cr',
      status: 'Active',
      integration: 'Connected',
      lastSync: '30 mins ago'
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-blue-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-medium text-blue-900">
                {nationalStats.totalAthletes.toLocaleString()}
              </p>
              <p className="text-sm text-blue-700">Total Athletes</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-green-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-medium text-green-900">
                {nationalStats.talentIdentified}
              </p>
              <p className="text-sm text-green-700">Talent Identified</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-orange-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-medium text-orange-900">
                {nationalStats.pendingVerifications}
              </p>
              <p className="text-sm text-orange-700">Pending Reviews</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-purple-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-medium text-purple-900">
                +{nationalStats.monthlyGrowth}%
              </p>
              <p className="text-sm text-purple-700">Monthly Growth</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Gender & Age Distribution */}
      <div className="grid grid-cols-1 gap-4">
        <Card className="p-4">
          <h3 className="font-medium text-gray-900 mb-4">Gender Distribution</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Male Athletes</span>
              <span className="text-sm font-medium">{nationalStats.genderDistribution.male}%</span>
            </div>
            <Progress value={nationalStats.genderDistribution.male} className="h-2" />
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Female Athletes</span>
              <span className="text-sm font-medium">{nationalStats.genderDistribution.female}%</span>
            </div>
            <Progress value={nationalStats.genderDistribution.female} className="h-2" />
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="font-medium text-gray-900 mb-4">Age Distribution</h3>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(nationalStats.ageDistribution).map(([ageGroup, percentage]) => (
              <div key={ageGroup} className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-gray-900">{ageGroup}</p>
                <p className="text-lg font-medium text-blue-600">{percentage}%</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Talent Pipeline */}
      <Card className="p-4">
        <h3 className="font-medium text-gray-900 mb-4">Talent Pipeline</h3>
        <div className="space-y-3">
          {talentPipeline.map((level) => (
            <div key={level.level} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: level.color }}
                ></div>
                <span className="text-sm font-medium">{level.level}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">{level.count.toLocaleString()}</span>
                <div className="w-20">
                  <Progress value={level.percentage} className="h-2" />
                </div>
                <span className="text-sm font-medium">{level.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderRegionalAnalytics = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Regional Performance</h2>
        <div className="flex gap-2">
          <Select value={selectedSport} onValueChange={setSelectedSport}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Sport" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sports</SelectItem>
              <SelectItem value="cricket">Cricket</SelectItem>
              <SelectItem value="athletics">Athletics</SelectItem>
              <SelectItem value="badminton">Badminton</SelectItem>
              <SelectItem value="football">Football</SelectItem>
            </SelectContent>
          </Select>
          <Button size="sm" variant="outline">
            <Download className="h-4 w-4 mr-1" />
            Export
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {regionalData.map((state, index) => (
          <Card key={state.state} className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm ${
                  index === 0 ? 'bg-yellow-100 text-yellow-800' :
                  index === 1 ? 'bg-gray-100 text-gray-800' :
                  index === 2 ? 'bg-orange-100 text-orange-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{state.state}</h3>
                  <p className="text-sm text-gray-600">Top Sport: {state.topSport}</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {state.growth}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-3">
              <div className="text-center">
                <p className="text-lg font-medium text-gray-900">
                  {state.athletes.toLocaleString()}
                </p>
                <p className="text-xs text-gray-600">Athletes</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-medium text-gray-900">{state.talentScore}</p>
                <p className="text-xs text-gray-600">Talent Score</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-medium text-gray-900">{state.programs}</p>
                <p className="text-xs text-gray-600">Programs</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Verification Rate:</span>
                <Progress value={state.verified} className="w-16 h-2" />
                <span className="text-sm font-medium">{state.verified}%</span>
              </div>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderVerificationQueue = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Verification Queue</h2>
        <div className="flex gap-2">
          <Input 
            placeholder="Search athletes..." 
            className="w-48"
          />
          <Button size="sm" variant="outline">
            <Filter className="h-4 w-4 mr-1" />
            Filter
          </Button>
        </div>
      </div>

      <Card className="p-4 bg-yellow-50 border-yellow-200">
        <div className="text-center">
          <AlertTriangle className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <h3 className="font-medium text-yellow-900 mb-1">
            {nationalStats.pendingVerifications} Tests Awaiting Review
          </h3>
          <p className="text-sm text-yellow-700">Average processing time: 2.5 hours</p>
        </div>
      </Card>

      <div className="space-y-3">
        {pendingVerifications.map((verification) => (
          <Card key={verification.id} className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-gray-900">{verification.athleteName}</h3>
                  <Badge variant="secondary" className="text-xs">
                    Age {verification.age}
                  </Badge>
                  <Badge 
                    className={`text-xs ${
                      verification.priority === 'high' ? 'bg-red-100 text-red-800' :
                      verification.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {verification.priority} priority
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {verification.sport} • {verification.testType} • {verification.state}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>Score: {verification.score}%</span>
                  <span>AI Confidence: {verification.aiConfidence}%</span>
                  <span>Submitted: {verification.submittedDate}</span>
                </div>
              </div>
            </div>

            {verification.flaggedIssues.length > 0 && (
              <div className="mb-3">
                <p className="text-sm font-medium text-red-900 mb-1">Flagged Issues:</p>
                <div className="flex gap-1">
                  {verification.flaggedIssues.map((issue, index) => (
                    <Badge key={index} className="bg-red-100 text-red-800 text-xs">
                      {issue.replace('_', ' ')}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Progress value={verification.aiConfidence} className="w-20 h-2" />
                <span className="text-xs text-gray-600">AI Analysis</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  Review Video
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Approve
                </Button>
                <Button size="sm" variant="outline" className="text-red-600 border-red-200">
                  Reject
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderProgramIntegration = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Program Integration</h2>
        <Button size="sm" variant="outline">Sync All Programs</Button>
      </div>

      <Card className="p-4 bg-green-50 border-green-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <Database className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-medium text-green-900">System Integration Status</h3>
            <p className="text-sm text-green-700">All major programs connected and syncing</p>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        {governmentPrograms.map((program) => (
          <Card key={program.id} className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-medium">
                    {program.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-gray-900">{program.name}</h3>
                  <p className="text-sm text-gray-600">
                    {program.participants.toLocaleString()} participants • {program.budget}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge 
                  className={`text-xs ${
                    program.integration === 'Connected' ? 'bg-green-100 text-green-800' :
                    program.integration === 'Partial' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}
                >
                  {program.integration}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {program.status}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-3">
              <div className="bg-blue-50 p-3 rounded-lg text-center">
                <p className="text-lg font-medium text-blue-900">
                  {program.participants.toLocaleString()}
                </p>
                <p className="text-xs text-blue-700">Active Athletes</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <p className="text-lg font-medium text-green-900">{program.budget}</p>
                <p className="text-xs text-green-700">Annual Budget</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg text-center">
                <p className="text-sm font-medium text-purple-900">{program.lastSync}</p>
                <p className="text-xs text-purple-700">Last Sync</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Integration health: 98%
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Globe className="h-4 w-4 mr-1" />
                  View Portal
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Sync Now
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-12 flex-col">
            <FileText className="h-5 w-5 mb-1" />
            <span className="text-sm">Generate Report</span>
          </Button>
          <Button variant="outline" className="h-12 flex-col">
            <Target className="h-5 w-5 mb-1" />
            <span className="text-sm">Set Targets</span>
          </Button>
          <Button variant="outline" className="h-12 flex-col">
            <Users className="h-5 w-5 mb-1" />
            <span className="text-sm">Bulk Import</span>
          </Button>
          <Button variant="outline" className="h-12 flex-col">
            <BarChart className="h-5 w-5 mb-1" />
            <span className="text-sm">Analytics</span>
          </Button>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="flex-1 bg-white">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
            <ChevronRight className="h-5 w-5 rotate-180" />
          </Button>
          <div>
            <h1 className="text-2xl font-medium text-gray-900">SAI Admin Dashboard</h1>
            <p className="text-gray-600">National Sports Talent Management System</p>
          </div>
        </div>

        {/* Government Badge */}
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1721593979313-8661afd501c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYWRtaW5pc3RyYXRpb24lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU3NDA0NzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Government administration" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative p-4 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Sports Authority of India
            </h3>
            <p className="text-sm text-gray-600">
              Official dashboard for national talent identification and development
            </p>
          </div>
        </Card>
      </div>

      {/* Tabs Navigation */}
      <div className="px-4 pb-20">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="regional">Regional</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            {renderOverview()}
          </TabsContent>

          <TabsContent value="regional">
            {renderRegionalAnalytics()}
          </TabsContent>

          <TabsContent value="verification">
            {renderVerificationQueue()}
          </TabsContent>

          <TabsContent value="programs">
            {renderProgramIntegration()}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}