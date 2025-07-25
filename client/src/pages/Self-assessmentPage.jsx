import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// Landing Page SelfAssessment
export const SelfAssessment = () => {
  return (
    <section className="bg-gradient-to-b from-sky-200 to-white min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-[#1A2442] rounded-3xl p-20 h-[500px] md:h-[700px] max-w-[1850px] w-full flex flex-col md:flex-row justify-between items-center shadow-lg">
        <div className="relative text-white max-w-xl">
          <img
            src="/y.png"
            alt="abstract decoration"
            className="absolute -top-20 -left-10 z-0 w-72 opacity-40"
          />
          <h1 className="relative z-10 text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
            Stop guessing. <br />
            <span className="text-blue-300">Start assessing.</span>
          </h1>
          <p className="italic text-gray-300 mb-10 relative z-10">
            "Knowing yourself is the beginning of all wisdom." – Aristotle
          </p>
          <Link to="/self-assessment/start">
            <button className="relative z-10 bg-sky-300 hover:bg-sky-400 text-black px-10 py-3 mt-10 rounded-full font-semibold shadow-md transition">
              Start Reflection
            </button>
          </Link>
        </div>

        <div className="mt-10 md:mt-0 md:ml-10">
          <img
            src="/sa1.png"
            alt="Meditation Illustration"
            className="max-w-xs md:max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

// Halaman AssessmentStart
export const AssessmentStart = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-sky-200 to-white flex flex-col items-center justify-center text-center px-6 py-10">

      <h1 className="text-4xl md:text-5xl font-bold text-[#1A2442] mb-10">Self Assessment</h1>

      <div className="relative w-[300px] md:w-[400px] mb-10">
        <img src="/sawal.png" alt="MoodLens Diagram" className="w-full" />
      </div>

      <h2 className="text-2xl font-bold text-[#1A2442] mb-2">
        MooLens<span className="text-yellow-400">✦</span>
      </h2>

      <p className="text-gray-700 text-sm md:text-base mb-10">
        How are you feeling today? <br />
        Let's explore together through the following questions.
      </p>

      <Link to="/self-assessment/form">
        <button className="bg-[#1A2442] text-white px-50 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#2B3560]">
          Start
        </button>
      </Link>
    </section>
  );
};

const questions = [
  "How old are you?", // Age question first
  "Do you often feel panicked?",
  "Do you experience excessive sweating (without physical cause)?",
  "Do you have difficulty concentrating?",
  "Are you having trouble with work or daily activities?",
  "Have you felt hopeless lately?",
  "Do you often feel angry without a clear reason?",
  "Do you feel your reactions to situations are overly exaggerated?",
  "Has your eating pattern changed unusually?",
  "Have you ever had thoughts of suicide?",
  "Do you feel constantly fatigued without a physical reason?",
  "Has your weight increased significantly without an apparent cause?",
  "Do you feel like withdrawing or becoming very introverted?",
  "Do you often experience nightmares?",
  "Do you avoid people or social activities you used to enjoy?",
  "Do you frequently feel negative about yourself?",
  "Do you often blame yourself for small things?",
  "Have you ever experienced hallucinations (seeing or hearing things that aren't real)?",
  "Do you engage in repetitive behaviors that are hard to control?",
  "Do you feel unusually energetic (hyperactive)?",
];

export const AssessmentForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState("age");  // Initial step is asking for age
  const [birthDate, setBirthDate] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    "Do you often feel panicked?",
    "Do you experience excessive sweating (without physical cause)?",
    "Do you have difficulty concentrating?",
    "Are you having trouble with work or daily activities?",
    "Have you felt hopeless lately?",
    "Do you often feel angry without a clear reason?",
    "Do you feel your reactions to situations are overly exaggerated?",
    "Has your eating pattern changed unusually?",
    "Have you ever had thoughts of suicide?",
    "Do you feel constantly fatigued without a physical reason?",
    "Has your weight increased significantly without an apparent cause?",
    "Do you feel like withdrawing or becoming very introverted?",
    "Do you often experience nightmares?",
    "Do you avoid people or social activities you used to enjoy?",
    "Do you frequently feel negative about yourself?",
    "Do you often blame yourself for small things?",
    "Have you ever experienced hallucinations (seeing or hearing things that aren't real)?",
    "Do you engage in repetitive behaviors that are hard to control?",
    "Do you feel unusually energetic (hyperactive)?",
  ];

  const fieldNames = [
    "panic", "sweating", "concentration_trouble", "work_trouble", "hopelessness",
    "anger", "over_react", "eating_change", "suicidal_thought", "tired",
    "weight_gain", "introvert", "nightmares", "avoids_people_activities",
    "negative_feeling", "self_blaming", "hallucinations", "repetitive_behaviour",
    "increased_energy"
  ];

  // Handle the age input
  const handleAgeSubmit = () => {
    if (!birthDate) {
      alert("Please select your birth date.");
      return;
    }

    const age = calculateAge(birthDate);
    setAnswers([age]);
    setStep("questions");
  };

  const calculateAge = (dob) => {
    const birth = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = async () => {
    if (selectedAnswer === null) {
      alert("Please select an answer before continuing.");
      return;
    }

    const updatedAnswers = [...answers];
    updatedAnswers.push(selectedAnswer);
    setAnswers(updatedAnswers);
    setSelectedAnswer(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Create the object with field names and answers
      const assessmentData = {
        age: answers[0],  // Using the age that was entered in the first step
        ...fieldNames.reduce((acc, fieldName, index) => {
          acc[fieldName] = updatedAnswers[index + 1] === "Yes" ? 1 : 0;
          return acc;
        }, {}),
      };

      // Submit the assessment data
      const response = await submitAssessment(assessmentData);
      if (response.success) {
        // Pass the assessment result to the summary page
        navigate("/self-assessment/summary", {
          state: { assessment_result: response.assessment_result },
        });
      } else {
        alert("Something went wrong, please try again.");
      }
    }
  };


  const submitAssessment = async (assessmentData) => {
    const url = "http://localhost:3000/api/self-assessment"; // Your backend API endpoint
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(assessmentData),
    });

    const data = await response.json();
    return data; // Return the API response
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-b from-[#DFF1FF] to-[#B9E3FF] relative">
      <h1 className="text-4xl md:text-5xl font-bold text-[#1A2442] -mt-10 mb-32 text-center">
        Self Assessment
      </h1>

      {step === "age" ? (
        <>
          <p className="text-xl mb-8">Please enter your date of birth:</p>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="bg-white w-full max-w-md text-xl px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3A53BF] mb-8"
          />
          <button
            onClick={handleAgeSubmit}
            className="bg-[#1E2347] text-white text-xl font-semibold w-full max-w-md py-4 rounded-full shadow-md hover:opacity-90 transition"
          >
            Next
          </button>
        </>
      ) : (
        <>
          {/* Progress Bar */}
          <div className="w-full max-w-7xl mb-14 relative">
            <div className="h-6 bg-transparent border-4 border-[#1A2442] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#3A53BF]"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
            <img
              src="/brain-progress.png"
              alt="progress icon"
              className="absolute top-[-20px]"
              style={{ left: `calc(${((currentQuestion + 1) / questions.length) * 100}% - 18px)` }}
            />
          </div>

          {/* Question */}
          <div className="w-full max-w-2xl bg-white text-left text-xl text-black rounded-xl p-6 mb-10 shadow-md">
            {questions[currentQuestion]}
          </div>

          {/* Answer Buttons */}
          <div className="flex gap-6 mb-10 justify-center flex-wrap w-full max-w-2xl">
            <button
              onClick={() => handleSelectAnswer("Yes")}
              className={`w-full max-w-[calc(50%-1.5rem)] text-xl font-semibold py-4 rounded-full 
                outline outline-4 outline-white 
                hover:outline-[#3A53BF] hover:bg-white hover:text-[#3A53BF] transition duration-200
                ${selectedAnswer === "Yes"
                  ? "bg-[#3A53BF] text-white outline-[#3A53BF]"
                  : "bg-[#D4E6F1] text-[#1A2442]"
                }`}
            >
              Yes
            </button>
            <button
              onClick={() => handleSelectAnswer("No")}
              className={`w-full max-w-[calc(50%-1.5rem)] text-xl font-semibold py-4 rounded-full 
                outline outline-4 outline-white 
                hover:outline-[#3A53BF] hover:bg-white hover:text-[#3A53BF] transition duration-200
                ${selectedAnswer === "No"
                  ? "bg-[#3A53BF] text-white outline-[#3A53BF]"
                  : "bg-[#D4E6F1] text-[#1A2442]"
                }`}
            >
              No
            </button>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className={`bg-[#1E2347] text-white text-xl font-semibold w-full max-w-2xl py-4 rounded-full shadow-md hover:opacity-90 transition
              ${selectedAnswer === null ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </>
      )}
    </section>
  );
};

export const SummaryForm = () => {
  const location = useLocation();

  // Check if assessmentResult is available in location.state
  const assessmentResult = location.state?.assessment_result;

  console.log('Assessment Result:', assessmentResult);  // Add this for debugging

  // If assessmentResult is not found, show an error or a fallback UI
  if (!assessmentResult) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-b from-[#DFF1FF] to-[#B9E3FF]">
        <h1 className="text-4xl font-bold text-[#1A2442] mb-4">Assessment Summary</h1>
        <p className="text-red-500">No assessment data found. Please complete the assessment first.</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-b from-[#DFF1FF] to-[#B9E3FF]">
      <h1 className="text-4xl font-bold text-[#1A2442] mb-4">Assessment Summary</h1>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Result: {assessmentResult.label}</h2>
        <p className="mb-4">{assessmentResult.description}</p>
        <p className="font-semibold text-lg">Confidence: {assessmentResult.confidence_percent}%</p>
        <p className="mt-4">{assessmentResult.tips}</p>
      </div>
    </section>
  );
};
