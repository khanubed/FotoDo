import { useState } from "react";
import { BottomNavigation } from "./components/BottomNavigation";
import { HomeScreen } from "./components/HomeScreen";
import { TestsScreen } from "./components/TestsScreen";
import { CommunityScreen } from "./components/CommunityScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { HelpScreen } from "./components/HelpScreen";
import { SignUpScreen } from "./components/SignUpScreen";
import { EducationScreen } from "./components/EducationScreen";
import { EquipmentScreen } from "./components/EquipmentScreen";
import { FamilyDashboard } from "./components/FamilyDashboard";
import { WomenSafeSpace } from "./components/WomenSafeSpace";
import { SAIAdminDashboard } from "./components/SAIAdminDashboard";
import { ShuttleRunContainer } from "./components/shuttle-run/ShuttleRunContainer";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [showSignUp, setShowSignUp] = useState(true); // Show signup screen first
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<string | null>(null);
  const [userType, setUserType] = useState<'athlete' | 'parent' | 'coach' | 'official'>('athlete');

  const handleActionClick = (action: string) => {
    switch (action) {
      case "start-test":
        setActiveTab("tests");
        toast.success("Opening fitness tests...");
        break;
      case "view-progress":
        setActiveTab("profile");
        toast.success("Viewing your progress...");
        break;
      case "join-competition":
        setActiveTab("community");
        toast.success("Exploring competitions...");
        break;
      case "find-coach":
        setActiveTab("community");
        toast.success("Finding coaches for you...");
        break;
      case "equipment-shop":
        setCurrentScreen("equipment");
        toast.success("Opening equipment marketplace...");
        break;
      case "education":
        setCurrentScreen("education");
        toast.success("Opening educational resources...");
        break;
      case "community":
        setActiveTab("community");
        toast.success("Welcome to the community!");
        break;
      case "family-dashboard":
        setCurrentScreen("family");
        toast.success("Opening family dashboard...");
        break;
      case "women-safe-space":
        setCurrentScreen("women");
        toast.success("Opening women's safe space...");
        break;
      case "sai-admin":
        setCurrentScreen("sai");
        toast.success("Opening SAI admin dashboard...");
        break;
      default:
        toast.info(`${action} feature coming soon!`);
    }
  };

  const handleTestSelect = (testId: string) => {
    switch (testId) {
      case 'shuttle-run':
        setCurrentScreen("shuttle-run");
        toast.success("Starting Shuttle Run test...");
        break;
      case 'vertical-jump':
        toast.info("Vertical Jump test coming soon!");
        break;
      case 'sit-ups':
        toast.info("Sit-ups test coming soon!");
        break;
      case 'endurance-run':
        toast.info("Endurance Run test coming soon!");
        break;
      case 'flexibility':
        toast.info("Flexibility test coming soon!");
        break;
      case 'plank-hold':
        toast.info("Plank Hold test coming soon!");
        break;
      default:
        toast.success(`Starting ${testId.replace("-", " ")} test...`);
    }
  };

  const handleFeatureClick = (feature: string) => {
    toast.info(`${feature} feature opened!`);
  };

  const handleSettingClick = (setting: string) => {
    switch (setting) {
      case "edit-profile":
        toast.info("Profile editor opening...");
        break;
      case "notifications":
        toast.info("Notification preferences updated!");
        break;
      case "head-gestures":
        toast.info("Head gesture navigation toggled!");
        break;
      case "voice-assistant":
        toast.info("Voice assistant settings updated!");
        break;
      case "language":
        toast.info("Language selector opening...");
        break;
      default:
        toast.info(`${setting} settings opened!`);
    }
  };

  const handleHelpClick = (section: string) => {
    switch (section) {
      case "tutorials":
        toast.info("Opening video tutorials...");
        break;
      case "faq":
        toast.info("Frequently asked questions...");
        break;
      case "contact":
        toast.info("Connecting to support...");
        break;
      case "voice-help":
        toast.info("Voice assistant help activated!");
        break;
      case "accessibility":
        toast.info("Accessibility guide opened...");
        break;
      case "safety":
        if (userType === 'parent' || userType === 'coach') {
          setCurrentScreen("family");
          toast.success("Opening family safety dashboard...");
        } else {
          toast.info("Safety and privacy information...");
        }
        break;
      case "women-safety":
        setCurrentScreen("women");
        toast.success("Opening women's safe space...");
        break;
      default:
        toast.info(`${section} help section opened!`);
    }
  };

  const handleSignUpComplete = () => {
    setIsLoggedIn(true);
    setShowSignUp(false);
    toast.success("Welcome to FITODO! 🎉");
  };

  const handleBackToSignUp = () => {
    setShowSignUp(true);
  };

  const handleBackToHome = () => {
    setCurrentScreen(null);
  };

  const handleBackToTests = () => {
    setCurrentScreen(null);
    setActiveTab("tests");
  };

  const renderScreen = () => {
    // Handle full-screen overlays first
    if (currentScreen === "education") {
      return <EducationScreen onBack={handleBackToHome} />;
    }
    
    if (currentScreen === "equipment") {
      return <EquipmentScreen onBack={handleBackToHome} />;
    }

    if (currentScreen === "family") {
      return <FamilyDashboard onBack={handleBackToHome} userType={userType === 'parent' ? 'parent' : 'guardian'} />;
    }

    if (currentScreen === "women") {
      return <WomenSafeSpace onBack={handleBackToHome} />;
    }

    if (currentScreen === "sai") {
      return <SAIAdminDashboard onBack={handleBackToHome} />;
    }

    // Handle test screens
    if (currentScreen === "shuttle-run") {
      return <ShuttleRunContainer onBack={handleBackToTests} />;
    }

    // Handle main tabs
    switch (activeTab) {
      case "home":
        return <HomeScreen onActionClick={handleActionClick} userType={userType} />;
      case "tests":
        return <TestsScreen onTestSelect={handleTestSelect} />;
      case "community":
        return (
          <CommunityScreen
            onFeatureClick={handleFeatureClick}
            userType={userType}
          />
        );
      case "profile":
        return (
          <ProfileScreen onSettingClick={handleSettingClick} userType={userType} />
        );
      case "help":
        return <HelpScreen onHelpClick={handleHelpClick} />;
      default:
        return <HomeScreen onActionClick={handleActionClick} userType={userType} />;
    }
  };

  // Show sign up screen if user hasn't completed registration
  if (showSignUp && !isLoggedIn) {
    return (
      <div className="h-screen bg-white">
        <SignUpScreen 
          onBack={handleBackToSignUp}
          onSignUpComplete={handleSignUpComplete}
        />
        <Toaster
          position="top-center"
          expand={false}
          richColors
          closeButton
        />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {renderScreen()}
      </div>

      {/* Bottom Navigation - hide on full screen overlays and test screens */}
      {!currentScreen && (
        <BottomNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      )}

      {/* Toast Notifications */}
      <Toaster
        position="top-center"
        expand={false}
        richColors
        closeButton
      />
    </div>
  );
}
