import { useState, useEffect } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

function RealCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);

  const getDayName = (date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  };

  const generateCalendarDays = () => {
    const today = new Date();
    const daysToShow = 30;
    const result = [];

    for (let i = -3; i < daysToShow - 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      result.push({
        date: date,
        dayNumber: date.getDate(),
        dayName: getDayName(date),
        isToday: date.toDateString() === today.toDateString(),
        isSelected: date.toDateString() === selectedDate.toDateString(),
      });
    }

    setCalendarDays(result);
  };

  useEffect(() => {
    generateCalendarDays();
  }, [selectedDate]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="mb-8">
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-2 pb-3">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              onClick={() => handleDateSelect(day.date)}
              className={cn(
                "flex flex-col items-center justify-center flex-shrink-0 w-[60px] h-[60px] rounded-full cursor-pointer transition-all",
                day.isSelected
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white text-gray-800 hover:bg-gray-100",
                day.isToday && !day.isSelected && "border-2 border-indigo-400"
              )}
            >
              <span className="text-sm font-semibold">{day.dayNumber}</span>
              <span className="text-[10px]">{day.dayName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RealCalendar;