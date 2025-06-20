import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate for potential "Go back" button

const MoodPhotoResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate for potential back button
  const [moodResult, setMoodResult] = useState("Unknown"); // Default to "Unknown" if no data
  const [confidence, setConfidence] = useState(null);
  const [displayImageUrl, setDisplayImageUrl] = useState(null);

  useEffect(() => {
    if (location.state) {
      const { mood, confidence, capturedImageUrl } = location.state;
      if (mood) {
        setMoodResult(mood);
      }
      if (typeof confidence === 'number') {
        setConfidence(confidence);
      }
      if (capturedImageUrl) {
        setDisplayImageUrl(capturedImageUrl);
      }
    } else {
      // If accessed directly without state, show a message and optionally redirect
      setMoodResult("No mood data available.");
      setConfidence(null);
      setDisplayImageUrl(null);
      console.warn("MoodPhotoResultPage accessed without prediction data. Redirecting...");
      // Optional: Redirect back after a short delay if no data
      // setTimeout(() => navigate('/track-mood'), 3000);
    }
  }, [location.state, navigate]); // Add navigate to dependency array

  // Dynamic styling for mood result box based on mood (example)
  const getMoodBoxStyle = (mood) => {
    switch (mood.toLowerCase()) {
      case 'happy': return 'from-yellow-300 to-amber-500 text-amber-800';
      case 'sad': return 'from-blue-300 to-blue-500 text-blue-800';
      case 'angry': return 'from-red-300 to-red-500 text-red-800';
      case 'neutral': return 'from-gray-300 to-gray-500 text-gray-800';
      default: return 'from-purple-300 to-purple-500 text-purple-800'; // For 'Unknown' or other moods
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start font-nunito relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-8 md:gap-12">
        {/* Mood Result Section */}
        <div className="w-full flex flex-col items-center relative mt-16 sm:mt-20">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Today I feel...</h1>
          <div className={`
            mt-2 px-10 py-5 sm:px-16 sm:py-6
            bg-gradient-to-br inline-block rounded-3xl
            text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase
            shadow-xl transform transition-all duration-300 ease-in-out
            ${getMoodBoxStyle(moodResult)}
            hover:scale-105 hover:shadow-2xl
          `}>
            {moodResult}
          </div>
          {confidence !== null && (
            <p className="text-sm sm:text-base text-gray-600 mt-3 font-medium">
              Confidence: <span className="font-semibold text-gray-700">{(confidence * 100).toFixed(2)}%</span>
            </p>
          )}
        </div>

        {/* Captured Image Display */}
        <div className="relative z-10 w-full max-w-2xl mx-auto rounded-xl shadow-2xl overflow-hidden border-4 border-white transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
          {displayImageUrl ? (
            <img
              src={displayImageUrl}
              alt="Captured Mood"
              // Use aspect-video to maintain a 16:9 ratio, and object-cover to fill it
              className="w-full h-auto object-cover aspect-video"
            />
          ) : (
            <div className="w-full h-auto aspect-video flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 text-gray-600 text-lg font-medium p-8">
              <p className="text-center">No image captured or loaded.<br/>Please go back to capture your mood.</p>
            </div>
          )}
        </div>
      </div>

      {/* Background Images - Adjusted positions for better visual balance */}
      <img
        src="/yellow.png"
        alt=""
        className="absolute -right-1/6 -top-1/5 md:right-0 md:-top-1/12 lg:top-10 lg:right-48 w-[320px] md:w-[400px] opacity-70"
      />
      <img
        src="/cream.png"
        alt=""
        className="absolute -left-16 bottom-0 md:-left-0 md:bottom-[-2rem] lg:left-0 lg:-bottom-10 w-[140px] md:w-[180px] lg:w-[220px] opacity-80"
      />
      <img
        src="/blue.png"
        alt=""
        className="absolute -left-1/5 -bottom-1/6 md:-left-1/4 md:-bottom-1/4 lg:-left-24 lg:bottom-16 w-[320px] md:w-[420px] opacity-60"
      />
    </div>
  );
};

export default MoodPhotoResultPage;