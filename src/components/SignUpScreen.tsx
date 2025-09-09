import { useState } from 'react';
import { ArrowLeft, Globe, CheckCircle, Upload, Camera, Star, Trophy, Users, Shield, Lock, Phone, Mail, Eye, EyeOff } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Checkbox } from './ui/checkbox';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import exampleImage from 'figma:asset/e73cce28355be4b8af6641479452d7b05d5ac26c.png';

interface SignUpScreenProps {
  onBack: () => void;
  onSignUpComplete: () => void;
}

interface FormData {
  // Step 1: Basic Information
  fullName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  region: string;
  
  // Step 2: Sports & Goals
  selectedSports: string[];
  targetLevel: string;
  experienceLevel: string;
  height: string;
  weight: string;
  
  // Step 3: Verification & Preferences
  certificates: File[];
  userType: string;
  
  // Accessibility
  headGestures: boolean;
  voiceCommands: boolean;
  highContrast: boolean;
  largeText: boolean;
  
  // Agreement
  agreeToTerms: boolean;
}

export function SignUpScreen({ onBack, onSignUpComplete }: SignUpScreenProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [language, setLanguage] = useState('English');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    region: '',
    selectedSports: [],
    targetLevel: '',
    experienceLevel: '',
    height: '',
    weight: '',
    certificates: [],
    userType: '',
    headGestures: false,
    voiceCommands: true,
    highContrast: false,
    largeText: false,
    agreeToTerms: false
  });
  
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const totalSteps = 3;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const languages = ['English', 'हिंदी', 'मराठी', 'தமிழ்', 'తెలుగు', 'বাংলা'];
  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const sports = [
    { id: 'cricket', name: 'Cricket', icon: '🏏', color: '#007AFF' },
    { id: 'football', name: 'Football', icon: '⚽', color: '#34C759' },
    { id: 'athletics', name: 'Athletics', icon: '🏃', color: '#FF9500' },
    { id: 'badminton', name: 'Badminton', icon: '🏸', color: '#FF3B30' },
    { id: 'basketball', name: 'Basketball', icon: '🏀', color: '#007AFF' },
    { id: 'tennis', name: 'Tennis', icon: '🎾', color: '#34C759' },
    { id: 'swimming', name: 'Swimming', icon: '🏊', color: '#FF9500' },
    { id: 'wrestling', name: 'Wrestling', icon: '🤼', color: '#FF3B30' },
    { id: 'hockey', name: 'Hockey', icon: '🏑', color: '#007AFF' },
    { id: 'kabaddi', name: 'Kabaddi', icon: '🤸', color: '#34C759' }
  ];

  const userTypes = [
    { id: 'athlete', title: 'Athlete', description: 'I want to track my performance', icon: Trophy },
    { id: 'parent', title: 'Parent/Guardian', description: 'I\'m registering for my child', icon: Users },
    { id: 'coach', title: 'Coach', description: 'I train and mentor athletes', icon: Star },
    { id: 'official', title: 'Sports Official', description: 'I organize competitions', icon: Shield }
  ];

  const targetLevels = [
    { id: 'district', name: 'District Level', color: '#34C759' },
    { id: 'state', name: 'State Level', color: '#FF9500' },
    { id: 'national', name: 'National Level', color: '#FF3B30' },
    { id: 'international', name: 'International Level', color: '#007AFF' }
  ];

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
      if (!formData.phoneNumber.trim()) errors.phoneNumber = 'Phone number is required';
      if (!formData.email.trim()) errors.email = 'Email is required';
      if (!formData.email.includes('@')) errors.email = 'Please enter a valid email';
      if (!formData.dateOfBirth) errors.dateOfBirth = 'Date of birth is required';
      if (!formData.gender) errors.gender = 'Please select your gender';
      if (!formData.region) errors.region = 'Please select your state';
    }

    if (step === 2) {
      if (formData.selectedSports.length === 0) errors.selectedSports = 'Please select at least one sport';
      if (!formData.targetLevel) errors.targetLevel = 'Please select your target level';
      if (!formData.experienceLevel) errors.experienceLevel = 'Please select your experience level';
    }

    if (step === 3) {
      if (!formData.userType) errors.userType = 'Please select your user type';
      if (!formData.agreeToTerms) errors.agreeToTerms = 'Please accept the terms and conditions';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
        toast.success(`Step ${currentStep + 1} unlocked! 🎉`);
      } else {
        handleSubmit();
      }
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    toast.success('Welcome to the Champion\'s Journey! 🏆');
    setIsLoading(false);
    onSignUpComplete();
  };

  const handleSportSelect = (sportId: string) => {
    const updatedSports = formData.selectedSports.includes(sportId)
      ? formData.selectedSports.filter(id => id !== sportId)
      : [...formData.selectedSports, sportId];
    
    setFormData({ ...formData, selectedSports: updatedSports });
  };

  const renderHeader = () => (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
      <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
        <ArrowLeft className="h-5 w-5" />
      </Button>
      
      <div className="flex items-center gap-2">
        <ImageWithFallback 
          src={exampleImage}
          alt="FITODO Logo" 
          className="h-8 w-auto"
        />
      </div>
      
      <Select value={language} onValueChange={setLanguage}>
        <SelectTrigger className="w-24 h-8 text-sm">
          <Globe className="h-4 w-4 mr-1" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map(lang => (
            <SelectItem key={lang} value={lang}>{lang}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  const renderProgressSection = () => (
    <div className="px-4 py-6 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 mb-2">Step {currentStep} of {totalSteps}</p>
        <Progress value={progressPercentage} className="h-3 mb-4" />
        <div className="flex justify-center gap-2">
          {[1, 2, 3].map(step => (
            <div 
              key={step}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                step < currentStep ? 'bg-green-500 text-white' :
                step === currentStep ? 'bg-blue-500 text-white' :
                'bg-gray-200 text-gray-500'
              }`}
            >
              {step < currentStep ? <CheckCircle className="h-4 w-4" /> : step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderHeroSection = () => (
    <div className="px-4 py-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Join the Champion's Journey
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Start Your Sports Legacy Today
        </p>
        
        <div className="relative mb-6">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1698261573792-a91901ab43c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwaW5kaWFuJTIwYXRobGV0ZXMlMjBzcG9ydHMlMjBhY3Rpb258ZW58MXx8fHwxNzU3NDAzMjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Diverse Indian athletes in sports action" 
            className="w-full h-48 object-cover rounded-xl opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
          
          {/* Mascot Character */}
          <motion.div 
            className="absolute bottom-4 right-4 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <span className="text-2xl">🏃‍♂️</span>
          </motion.div>
        </div>
        
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4"
          >
            <div className="flex items-center gap-2 text-yellow-800">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium">
                Earn your first badge by completing registration!
              </span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Enter your full name"
            className={`mt-1 ${validationErrors.fullName ? 'border-red-500' : ''}`}
          />
          {validationErrors.fullName && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.fullName}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phoneNumber">Phone Number *</Label>
          <div className="flex mt-1">
            <div className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-md">
              <span className="text-sm text-gray-600">+91</span>
            </div>
            <Input
              id="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              placeholder="Enter phone number"
              className={`rounded-l-none ${validationErrors.phoneNumber ? 'border-red-500' : ''}`}
            />
          </div>
          {validationErrors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.phoneNumber}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <div className="relative mt-1">
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              className={`pr-10 ${validationErrors.email ? 'border-red-500' : ''}`}
            />
            <Mail className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
          </div>
          {validationErrors.email && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
          )}
        </div>

        <div>
          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
            className={`mt-1 ${validationErrors.dateOfBirth ? 'border-red-500' : ''}`}
          />
          {validationErrors.dateOfBirth && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.dateOfBirth}</p>
          )}
        </div>

        <div>
          <Label>Gender *</Label>
          <RadioGroup 
            value={formData.gender} 
            onValueChange={(value) => setFormData({ ...formData, gender: value })}
            className="flex gap-6 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
          </RadioGroup>
          {validationErrors.gender && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.gender}</p>
          )}
        </div>

        <div>
          <Label htmlFor="region">State/Region *</Label>
          <Select value={formData.region} onValueChange={(value) => setFormData({ ...formData, region: value })}>
            <SelectTrigger className={`mt-1 ${validationErrors.region ? 'border-red-500' : ''}`}>
              <SelectValue placeholder="Select your state" />
            </SelectTrigger>
            <SelectContent>
              {indianStates.map(state => (
                <SelectItem key={state} value={state}>{state}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {validationErrors.region && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.region}</p>
          )}
        </div>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div>
        <Label>Select Your Sports *</Label>
        <p className="text-sm text-gray-600 mb-4">Choose the sports you're interested in</p>
        <div className="grid grid-cols-2 gap-3">
          {sports.map(sport => (
            <Card 
              key={sport.id}
              className={`p-3 cursor-pointer transition-all duration-200 ${
                formData.selectedSports.includes(sport.id) 
                  ? 'border-2' 
                  : 'border hover:shadow-md'
              }`}
              style={{
                borderColor: formData.selectedSports.includes(sport.id) ? sport.color : '#e5e7eb'
              }}
              onClick={() => handleSportSelect(sport.id)}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">{sport.icon}</div>
                <p className="text-sm font-medium">{sport.name}</p>
              </div>
            </Card>
          ))}
        </div>
        {validationErrors.selectedSports && (
          <p className="text-red-500 text-sm mt-2">{validationErrors.selectedSports}</p>
        )}
      </div>

      <div>
        <Label>Target Level *</Label>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {targetLevels.map(level => (
            <Card 
              key={level.id}
              className={`p-3 cursor-pointer transition-all duration-200 ${
                formData.targetLevel === level.id ? 'border-2' : 'border hover:shadow-md'
              }`}
              style={{
                borderColor: formData.targetLevel === level.id ? level.color : '#e5e7eb'
              }}
              onClick={() => setFormData({ ...formData, targetLevel: level.id })}
            >
              <div className="text-center">
                <Badge 
                  variant="secondary" 
                  className="mb-2"
                  style={{ 
                    backgroundColor: `${level.color}20`, 
                    color: level.color 
                  }}
                >
                  {level.name}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
        {validationErrors.targetLevel && (
          <p className="text-red-500 text-sm mt-2">{validationErrors.targetLevel}</p>
        )}
      </div>

      <div>
        <Label>Experience Level *</Label>
        <RadioGroup 
          value={formData.experienceLevel} 
          onValueChange={(value) => setFormData({ ...formData, experienceLevel: value })}
          className="mt-2 space-y-2"
        >
          <div className="flex items-center space-x-2 p-3 border rounded-lg">
            <RadioGroupItem value="beginner" id="beginner" />
            <div className="flex-1">
              <Label htmlFor="beginner" className="font-medium">Beginner</Label>
              <p className="text-sm text-gray-600">Just starting out</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 p-3 border rounded-lg">
            <RadioGroupItem value="intermediate" id="intermediate" />
            <div className="flex-1">
              <Label htmlFor="intermediate" className="font-medium">Intermediate</Label>
              <p className="text-sm text-gray-600">Some experience and training</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 p-3 border rounded-lg">
            <RadioGroupItem value="advanced" id="advanced" />
            <div className="flex-1">
              <Label htmlFor="advanced" className="font-medium">Advanced</Label>
              <p className="text-sm text-gray-600">Competitive level experience</p>
            </div>
          </div>
        </RadioGroup>
        {validationErrors.experienceLevel && (
          <p className="text-red-500 text-sm mt-2">{validationErrors.experienceLevel}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            id="height"
            type="number"
            value={formData.height}
            onChange={(e) => setFormData({ ...formData, height: e.target.value })}
            placeholder="160"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            value={formData.weight}
            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
            placeholder="65"
            className="mt-1"
          />
        </div>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div>
        <Label>Upload Certificates (Optional)</Label>
        <Card className="p-6 border-2 border-dashed border-gray-300 text-center mt-2 cursor-pointer hover:border-blue-400 transition-colors">
          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600 mb-2">Drag & drop your certificates here</p>
          <p className="text-xs text-gray-500">or click to browse files</p>
          <Button variant="outline" size="sm" className="mt-3">
            <Camera className="h-4 w-4 mr-2" />
            Scan with Camera
          </Button>
        </Card>
      </div>

      <div>
        <Label>User Type *</Label>
        <div className="grid grid-cols-1 gap-3 mt-2">
          {userTypes.map(type => {
            const Icon = type.icon;
            return (
              <Card 
                key={type.id}
                className={`p-4 cursor-pointer transition-all duration-200 ${
                  formData.userType === type.id ? 'border-2 border-blue-500' : 'border hover:shadow-md'
                }`}
                onClick={() => setFormData({ ...formData, userType: type.id })}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{type.title}</h3>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        {validationErrors.userType && (
          <p className="text-red-500 text-sm mt-2">{validationErrors.userType}</p>
        )}
      </div>

      <div>
        <Label>Accessibility Options</Label>
        <Card className="p-4 mt-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Head Gesture Navigation</p>
              <p className="text-sm text-gray-600">Navigate using head movements</p>
            </div>
            <Switch 
              checked={formData.headGestures}
              onCheckedChange={(checked) => setFormData({ ...formData, headGestures: checked })}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Voice Commands</p>
              <p className="text-sm text-gray-600">Audio assistance and navigation</p>
            </div>
            <Switch 
              checked={formData.voiceCommands}
              onCheckedChange={(checked) => setFormData({ ...formData, voiceCommands: checked })}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">High Contrast Mode</p>
              <p className="text-sm text-gray-600">Enhanced visual accessibility</p>
            </div>
            <Switch 
              checked={formData.highContrast}
              onCheckedChange={(checked) => setFormData({ ...formData, highContrast: checked })}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Large Text</p>
              <p className="text-sm text-gray-600">Bigger fonts for better readability</p>
            </div>
            <Switch 
              checked={formData.largeText}
              onCheckedChange={(checked) => setFormData({ ...formData, largeText: checked })}
            />
          </div>
        </Card>
      </div>

      <div>
        <Card className="p-4 bg-green-50 border-green-200">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-medium text-green-900">Your Data is Secure</h3>
              <p className="text-sm text-green-700">Protected with enterprise-grade encryption</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              SAI Approved
            </Badge>
            <div className="flex items-center gap-1 text-sm text-green-700">
              <Lock className="h-4 w-4" />
              <span>End-to-end encrypted</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox
          id="terms"
          checked={formData.agreeToTerms}
          onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
        />
        <div className="text-sm">
          <Label htmlFor="terms" className="cursor-pointer">
            I agree to the{' '}
            <span className="text-blue-600 underline">Terms & Conditions</span> and{' '}
            <span className="text-blue-600 underline">Privacy Policy</span>
          </Label>
        </div>
      </div>
      {validationErrors.agreeToTerms && (
        <p className="text-red-500 text-sm">{validationErrors.agreeToTerms}</p>
      )}
    </motion.div>
  );

  const renderNavigationButtons = () => (
    <div className="flex gap-4 pt-6">
      {currentStep > 1 && (
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          className="flex-1"
          disabled={isLoading}
        >
          Previous
        </Button>
      )}
      <Button 
        onClick={handleNext}
        className="flex-1 bg-blue-600 hover:bg-blue-700"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Creating Account...
          </div>
        ) : currentStep === totalSteps ? (
          'Begin Your Journey'
        ) : (
          'Next Step'
        )}
      </Button>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return renderStep1();
    }
  };

  const stepTitles = {
    1: 'Basic Information',
    2: 'Sports & Goals',
    3: 'Verification & Preferences'
  };

  return (
    <div className="min-h-screen bg-white">
      {renderHeader()}
      {renderProgressSection()}
      {renderHeroSection()}

      <div className="px-4 pb-8">
        <Card className="p-6 shadow-lg">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {stepTitles[currentStep as keyof typeof stepTitles]}
            </h2>
            <p className="text-sm text-gray-600">
              {currentStep === 1 && "Let's get to know you better"}
              {currentStep === 2 && "Tell us about your sports interests"}
              {currentStep === 3 && "Final step to complete your profile"}
            </p>
          </div>

          {renderCurrentStep()}
          {renderNavigationButtons()}
        </Card>

        {/* Alternative Options */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">Or sign up with</p>
          <div className="flex gap-4 justify-center mb-6">
            <Button variant="outline" className="flex-1 max-w-40">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </Button>
            <Button variant="outline" className="flex-1 max-w-40">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </Button>
          </div>
          
          <div className="text-sm text-gray-600">
            <span>Already have an account? </span>
            <button className="text-blue-600 font-medium hover:underline">
              Sign In
            </button>
          </div>
          
          <div className="mt-4">
            <button className="text-blue-600 font-medium hover:underline">
              Try as Guest
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500 space-y-2">
          <p>Need assistance? <span className="text-blue-600">Contact Support</span></p>
          <p>📞 1800-FITODO | ✉️ support@fitodo.in</p>
          <div className="flex justify-center gap-4">
            <span>🇮🇳 हिंदी</span>
            <span>English</span>
            <span>मराठी</span>
          </div>
        </div>
      </div>
    </div>
  );
}