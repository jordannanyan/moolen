import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";
import JournalEntries from "../components/JournalEntries";
import MarqueeText from "../components/MarqueeText";
import Footer from "../components/Footer";

function DailyJournalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#AADAFB] to-[#fff] pt-18 font-nunito">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-12 relative">
          <span className="relative z-10">Find Peace in Every Page</span>
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-0">
            <div className="w-16 h-16 rounded-full border-4 border-sky-200 opacity-70"></div>
          </div>
          <div className="absolute -right-4 bottom-0 z-0">
            <div className="w-20 h-8 rounded-full border-2 border-pink-200 opacity-70"></div>
          </div>
        </h1>
        <button className="bg-indigo-900 text-white font-medium py-3 px-8 rounded-full hover:bg-indigo-800 transition-colors">
          Pen Down Your Day
        </button>
      </section>

      {/* Marquee Banner */}
      <MarqueeText />

      {/* Diary Section */}
      <section className="container mx-auto px-4 py-45">
        <div className="text-center mb-8 relative">
          <span className="relative inline-block min-w-[16rem] min-h-[4rem] font-bold font-nunito text-4xl">
            Your Diary
            <img
              src="/circle.png"
              alt="Circle decoration"
              className="absolute -top-9 left-0 w-64 rounded-full"
            />
          </span>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-12 border border-amber-200 rounded-full -z-10"></div>
          <div className="absolute -top-4 right-[40%] text-amber-500 text-3xl">
            ✦
          </div>
          <div className="absolute top-2 left-[40%] text-indigo-500 text-3xl">
            ✦
          </div>
        </div>

        <div className="flex justify-between items-center mb-10">
          <button className="bg-white text-gray-800 px-4 py-1 rounded-full border border-gray-200 text-sm">
            This Month
          </button>
          <button className="text-gray-600 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
          </button>
        </div>

        <Calendar />
        <JournalEntries />
      </section>

      {/* Pelangi bergelombang */}
      <div className="relative w-full overflow-hidden mt-16">
        <img
          src="/pelangi.png"
          alt="Pelangi"
          className="relative z-10 mx-auto w-[840px] -mb-20"
        />
      </div>

      <Footer />
    </div>
  );
}

export default DailyJournalPage;