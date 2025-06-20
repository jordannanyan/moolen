import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Review from "../components/Review";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('authToken');
      const userData = localStorage.getItem('userData');
      
      if (token && userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          setIsLoggedIn(true);
        } catch (error) {
          console.error('Error parsing user data:', error);
          // Clear invalid data
          localStorage.removeItem('authToken');
          localStorage.removeItem('userData');
        }
      }
    };

    checkAuthStatus();
  }, []);

  // Handle protected route access
  const handleProtectedRoute = (path) => {
    if (!isLoggedIn) {
      alert('Please log in to access this feature.');
      navigate('/login');
      return;
    }
    navigate(path);
  };

  // Handle mood check-in click
  const handleMoodCheckIn = () => {
    handleProtectedRoute('/track-mood');
  };

  return (
    <div className="w-full">
      {/* Landing Page 1 */}
      <div className="flex flex-col lg:flex-row w-full px-6 lg:px-28 bg-gradient-to-b from-primary to-[#fff] pt-12 lg:pt-24 gap-8">
        <div className="w-full lg:w-2/3 flex flex-col justify-center gap-6 mt-10 items-center lg:items-start">
          <h1 className="text-3xl text-center lg:text-start md:text-4xl lg:text-5xl font-bold font-nunito md:max-w-2xl lg:max-w-4xl">
            Understand Your Emotions, Embrace Your{" "}
            <span className="relative inline-block">
              Journey
              <img
                src="/circle.png"
                alt="Circle decoration"
                className="absolute -top-5 -left-6 w-40 md:w-56 rounded-full"
              />
            </span>
          </h1>
          <p className="text-sm text-center lg:text-start lg:text-base md:text-base font-nunito max-w-xl italic">
            "Discover your mood, express your feelings, and grow every day with
            MooLen, a gentle space where your emotions are seen, heard, and
            nurtured."
          </p>
          
          {/* Welcome message for logged in users */}
          {isLoggedIn && user && (
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200">
              <p className="text-sm font-nunito text-gray-700">
                Welcome back, <span className="font-semibold">{user.username}</span>! 👋
              </p>
            </div>
          )}

          <button 
            onClick={handleMoodCheckIn}
            className="bg-secondary text-white text-sm font-bold font-nunito px-12 py-3 md:px-16 md:py-4 lg:px-8 lg:py-3 rounded-3xl w-fit hover:opacity-90 transition"
          >
            Track Your Mood
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img src="/battery.png" alt="..." className="w-full max-w-[500px] xl:max-w-[840px]" />
        </div>
      </div>

      {/* Landing page 2 & 3 */}
      <div className="px-6 sm:px-8 bg-gradient-to-b from-[#fff] to-primary pt-12 pb-24">
        {/* Landing page 2 */}
        <h2 className="mb-8 font-bold font-nunito text-xl lg:text-3xl text-center">
          How Can Moolen Help You Feel Better Today
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:px-24 justify-items-center">
          {[
            { 
              path: "/track-mood", 
              title: "Mood Check-In", 
              icon: "letter.png",
              protected: true 
            },
            { 
              path: "/journal", 
              title: "Daily Journal", 
              icon: "book.png",
              protected: true 
            },
            { 
              path: "/self-assessment", 
              title: "Self Assessment", 
              icon: "task.png",
              protected: true 
            },
            { 
              path: "/article", 
              title: "Daily Tips & Inspiration", 
              icon: "lamp.png",
              protected: false 
            },
          ].map((item, idx) => (
            <div key={idx} className="w-full max-w-[400px]">
              {item.protected ? (
                <div 
                  onClick={() => handleProtectedRoute(item.path)}
                  className="border-2 border-slate-400 px-6 py-4 flex items-center justify-between rounded-lg hover:bg-slate-100 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <p className="font-nunito text-lg">{item.title}</p>
                    {!isLoggedIn && (
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                        Login Required
                      </span>
                    )}
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src={`/${item.icon}`} alt={item.title} className="size-9" />
                    <ChevronRightIcon className="size-6" />
                  </div>
                </div>
              ) : (
                <Link to={item.path} className="block">
                  <div className="border-2 border-slate-400 px-6 py-4 flex items-center justify-between rounded-lg hover:bg-slate-100 transition">
                    <p className="font-nunito text-lg">{item.title}</p>
                    <div className="flex gap-4 items-center">
                      <img src={`/${item.icon}`} alt={item.title} className="size-9" />
                      <ChevronRightIcon className="size-6" />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Landing Page 3 */}
        <div className="mt-24 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/purba.png"
              alt="Emotional support"
              className="w-full max-w-[500px] md:max-w-[640px]"
            />
          </div>

          {/* Right Text */}
          <div id="about" className="w-full h-full lg:w-1/2 px-4 flex flex-col items-center font-nunito">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 max-w-xl">
              A Gentle Companion for Your Emotional Journey
            </h1>
            <p className="text-base md:text-lg text-center max-w-2xl mb-4">
              MooLen is a web based platform designed to help you understand and
              care for your emotional well-being.
            </p>
            <p className="text-base md:text-lg text-center max-w-2xl mb-4">
              Through real time mood detection, daily journaling, and thoughtful
              self assessment, MooLen creates a safe, supportive space where you
              can express yourself freely and track your emotional growth over
              time.
            </p>
            <p className="text-base md:text-lg text-center max-w-2xl">
              With MooLen, every feeling matters, and every small step counts.
            </p>

            {/* Call-to-action for non-logged users */}
            {!isLoggedIn && (
              <div className="mt-8 p-6 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 text-center">
                <p className="text-lg font-semibold mb-3">Ready to start your journey?</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link 
                    to="/register" 
                    className="bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition"
                  >
                    Sign Up Free
                  </Link>
                  <Link 
                    to="/login" 
                    className="border-2 border-secondary text-secondary px-6 py-2 rounded-full font-semibold hover:bg-secondary hover:text-white transition"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="bg-gradient-to-b font-nunito from-primary to-[#fff] flex flex-col mb-32 px-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 text-center">
          <img src="/star.png" alt="star" className="size-10 sm:size-12" />
          <div>
            <p className="text-md">Insights on Mental Wellness</p>
            <h1 className="text-2xl sm:text-3xl font-bold">What People Are Saying</h1>
          </div>
          <img src="/wave.png" alt="wave" className="w-24 sm:w-28" />
        </div>

        <div className="flex gap-6 overflow-x-auto pb-12 mb-10">
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>

        <div className="flex justify-center">
          <button className="px-12 sm:px-36 py-3 bg-[#1C2444] text-white font-bold text-lg shadow-lg rounded-full hover:opacity-90 transition">
            Tell Your Opinion Here
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;