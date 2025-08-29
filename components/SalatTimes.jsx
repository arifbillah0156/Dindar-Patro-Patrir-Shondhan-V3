"use client";
import { useEffect, useState } from "react";
import {
  FaMosque,
  FaSun,
  FaMoon,
  FaCloudSun,
  FaPrayingHands,
  FaStarAndCrescent,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  format,
  addDays,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  eachWeekOfInterval,
} from "date-fns";
import { bn } from "date-fns/locale";

// Custom Loading Component
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="text-6xl text-blue-600 animate-spin">
        <FaStarAndCrescent />
      </div>
    </div>
  );
}

function getHijriMonthName(monthNumber) {
  const hijriMonths = [
    "মুহররম",
    "সফর",
    "রবিউল আউয়াল",
    "রবিউস সানি",
    "জমাদিউল আউয়াল",
    "জমাদিউস সানি",
    "রজব",
    "শাবান",
    "রমজান",
    "শাওয়াল",
    "জিলকদ",
    "জিলহজ",
  ];

  // যদি মাস নম্বর স্ট্রিং আকারে থাকে, তাহলে সংখ্যায় রূপান্তর করুন
  const monthNum =
    typeof monthNumber === "string" ? parseInt(monthNumber) : monthNumber;

  // মাস নম্বর চেক করে সঠিক নাম রিটার্ন করুন
  if (monthNum >= 1 && monthNum <= 12) {
    return hijriMonths[monthNum - 1];
  }

  // যদি মাস নম্বর সঠিক না হয়, তাহলে খালি স্ট্রিং রিটার্ন করুন
  return "";
}

// Month and Year Selector Component
function MonthYearSelector({
  currentMonth,
  setCurrentMonth,
  isMobile = false,
}) {
  const months = [
    "জানুয়ারী",
    "ফেব্রুয়ারী",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i); // 10 years back and 10 years forward

  const handleMonthChange = (e) => {
    const monthIndex = months.indexOf(e.target.value);
    setCurrentMonth(new Date(currentMonth.getFullYear(), monthIndex, 1));
  };

  const handleYearChange = (e) => {
    setCurrentMonth(
      new Date(parseInt(e.target.value), currentMonth.getMonth(), 1)
    );
  };

  return (
    <div className={`flex gap-2 ${isMobile ? "flex-col" : ""}`}>
      <select
        value={months[currentMonth.getMonth()]}
        onChange={handleMonthChange}
        className={`px-3 py-2 border rounded-lg bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          isMobile ? "text-sm" : ""
        }`}
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select
        value={currentMonth.getFullYear()}
        onChange={handleYearChange}
        className={`px-3 py-2 border rounded-lg bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          isMobile ? "text-sm" : ""
        }`}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

// Desktop View Component
function DesktopView({
  currentMonth,
  setCurrentMonth,
  selectedDate,
  setSelectedDate,
  prayerTimes,
  hijriDate,
  isLoadingPrayerTimes,
}) {
  const prayerNames = [
    {
      key: "Fajr",
      name: "ফজর",
      icon: <FaMoon className="text-indigo-600" />,
      color: "from-indigo-500 to-purple-600",
      endTimeKey: "Sunrise",
      description: "ভোরের নামাজ",
    },
    {
      key: "Dhuhr",
      name: "যোহর",
      icon: <FaSun className="text-orange-500" />,
      color: "from-orange-400 to-red-500",
      endTimeKey: "Asr",
      description: "দুপুরের নামাজ",
    },
    {
      key: "Asr",
      name: "আসর",
      icon: <FaCloudSun className="text-amber-500" />,
      color: "from-amber-400 to-yellow-600",
      endTimeKey: "Maghrib",
      description: "বিকেলের নামাজ",
    },
    {
      key: "Maghrib",
      name: "মাগরিব",
      icon: <FaSun className="text-red-500" />,
      color: "from-red-500 to-pink-600",
      endTimeKey: "Isha",
      description: "সূর্যাস্তের নামাজ",
    },
    {
      key: "Isha",
      name: "ইশা",
      icon: <FaMoon className="text-blue-800" />,
      color: "from-blue-700 to-indigo-900",
      endTimeKey: "Midnight",
      description: "রাতের নামাজ",
    },
  ];

  const goToPreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const goToCurrentMonth = () => {
    setCurrentMonth(new Date());
  };

  // Generate calendar days
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });
  const days = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    days.push(new Date(currentDate));
    currentDate = addDays(currentDate, 1);
  }

  return (
    <div className="hidden md:flex flex-col justify-center lg:flex-row gap-8">
      {/* Calendar Section */}
      <div className="w-full lg:w-2/5 bg-white rounded-2xl shadow-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <button
            className="p-3 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 active:bg-blue-300 transition-colors duration-200 shadow-md"
            onClick={goToPreviousMonth}
          >
            <FaChevronLeft />
          </button>
          <div className="text-center">
            <MonthYearSelector
              currentMonth={currentMonth}
              setCurrentMonth={setCurrentMonth}
            />
            <button
              className="mt-2 text-sm text-blue-600 hover:text-blue-800 active:text-blue-900 font-medium transition-colors duration-200"
              onClick={goToCurrentMonth}
            >
              বর্তমান মাসে যান
            </button>
          </div>
          <button
            className="p-3 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 active:bg-blue-300 transition-colors duration-200 shadow-md"
            onClick={goToNextMonth}
          >
            <FaChevronRight />
          </button>
        </div>
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"].map(
            (day, index) => (
              <div
                key={index}
                className="text-center text-sm font-medium text-gray-600 py-2"
              >
                {day}
              </div>
            )
          )}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <div
              key={index}
              className={`h-12 flex items-center justify-center rounded-lg cursor-pointer transition-all duration-200 font-medium ${
                isSameDay(day, new Date())
                  ? "bg-blue-600 text-white shadow-md"
                  : isSameDay(day, selectedDate)
                  ? "bg-indigo-500 text-white shadow-md"
                  : day.getMonth() !== currentMonth.getMonth()
                  ? "text-gray-400"
                  : "text-gray-700 hover:bg-blue-100 active:bg-blue-200"
              }`}
              onClick={() => setSelectedDate(day)}
            >
              {format(day, "d")}
            </div>
          ))}
        </div>
      </div>
      {/* Prayer Times Section */}
      <div className="max-w-xl lg:w-3/5 bg-white rounded-2xl shadow-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {format(selectedDate, "EEEE, d MMMM yyyy", { locale: bn })}
            </h2>
            {hijriDate && (
              <p className="text-gray-600 flex items-center">
                <span className="ml-1">
                  {hijriDate.day.toString().padStart(2, "0")}/
                  {getHijriMonthName(hijriDate.month.number || hijriDate.month)}
                  /{hijriDate.year} হিজরী
                </span>
              </p>
            )}
          </div>
          <div className="text-3xl text-blue-600">
            <FaMosque />
          </div>
        </div>
        {isLoadingPrayerTimes ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-4xl text-blue-600 animate-spin">
              <FaStarAndCrescent />
            </div>
          </div>
        ) : prayerTimes ? (
          <div className="space-y-4">
            {prayerNames.map((prayer, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl ${
                  index % 2 === 0 ? "bg-blue-50" : "bg-indigo-50"
                } border border-gray-100 transition-all duration-200 hover:shadow-md`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-3 text-xl">{prayer.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {prayer.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {prayer.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-800">
                      {prayerTimes[prayer.key].substring(0, 5)} -{" "}
                      {prayerTimes[prayer.endTimeKey].substring(0, 5)}
                    </div>
                    <div className="text-xs text-gray-500">শুরু - শেষ</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600">নামাজের সময়সূচী লোড করা যাচ্ছে না</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Mobile View Component
function MobileView({
  currentMonth,
  setCurrentMonth,
  selectedDate,
  setSelectedDate,
  prayerTimes,
  hijriDate,
  isLoadingPrayerTimes,
}) {
  const prayerNames = [
    {
      key: "Fajr",
      name: "ফজর",
      icon: <FaMoon className="text-indigo-600" />,
      color: "from-indigo-500 to-purple-600",
      endTimeKey: "Sunrise",
      description: "ভোরের নামাজ",
    },
    {
      key: "Dhuhr",
      name: "যোহর",
      icon: <FaSun className="text-orange-500" />,
      color: "from-orange-400 to-red-500",
      endTimeKey: "Asr",
      description: "দুপুরের নামাজ",
    },
    {
      key: "Asr",
      name: "আসর",
      icon: <FaCloudSun className="text-amber-500" />,
      color: "from-amber-400 to-yellow-600",
      endTimeKey: "Maghrib",
      description: "বিকেলের নামাজ",
    },
    {
      key: "Maghrib",
      name: "মাগরিব",
      icon: <FaSun className="text-red-500" />,
      color: "from-red-500 to-pink-600",
      endTimeKey: "Isha",
      description: "সূর্যাস্তের নামাজ",
    },
    {
      key: "Isha",
      name: "ইশা",
      icon: <FaMoon className="text-blue-800" />,
      color: "from-blue-700 to-indigo-900",
      endTimeKey: "Midnight",
      description: "রাতের নামাজ",
    },
  ];

  const goToPreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const goToCurrentMonth = () => {
    setCurrentMonth(new Date());
  };

  // Generate calendar days
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });
  const days = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    days.push(new Date(currentDate));
    currentDate = addDays(currentDate, 1);
  }

  return (
    <div className="md:hidden flex flex-col gap-6">
      {/* Calendar Section */}
      <div className="bg-white rounded-2xl shadow-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <button
            className="p-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 active:bg-blue-300 transition-colors duration-200 shadow-md"
            onClick={goToPreviousMonth}
          >
            <FaChevronLeft />
          </button>
          <div className="text-center">
            <MonthYearSelector
              currentMonth={currentMonth}
              setCurrentMonth={setCurrentMonth}
              isMobile={true}
            />
            <button
              className="mt-2 text-sm text-blue-600 hover:text-blue-800 active:text-blue-900 font-medium transition-colors duration-200"
              onClick={goToCurrentMonth}
            >
              বর্তমান মাসে যান
            </button>
          </div>
          <button
            className="p-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 active:bg-blue-300 transition-colors duration-200 shadow-md"
            onClick={goToNextMonth}
          >
            <FaChevronRight />
          </button>
        </div>
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["র", "সো", "ম", "বু", "বৃ", "শু", "শ"].map((day, index) => (
            <div
              key={index}
              className="text-center text-xs font-medium text-gray-600 py-1"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <div
              key={index}
              className={`h-10 flex items-center justify-center rounded-lg cursor-pointer transition-all duration-200 font-medium ${
                isSameDay(day, new Date())
                  ? "bg-blue-600 text-white shadow-md"
                  : isSameDay(day, selectedDate)
                  ? "bg-indigo-500 text-white shadow-md"
                  : day.getMonth() !== currentMonth.getMonth()
                  ? "text-gray-400"
                  : "text-gray-700 hover:bg-blue-100 active:bg-blue-200"
              }`}
              onClick={() => setSelectedDate(day)}
            >
              {format(day, "d")}
            </div>
          ))}
        </div>
      </div>
      {/* Prayer Times Section */}
      <div className="bg-white rounded-2xl shadow-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {format(selectedDate, "EEEE, d MMMM yyyy", { locale: bn })}
            </h2>
            {hijriDate && (
              <p className="text-gray-600 flex items-center">
                <span className="ml-1">
                  {hijriDate.day.toString().padStart(2, "0")}/
                  {getHijriMonthName(hijriDate.month.number || hijriDate.month)}
                  /{hijriDate.year} হিজরী
                </span>
              </p>
            )}
          </div>
          <div className="text-2xl text-blue-600">
            <FaMosque />
          </div>
        </div>
        {isLoadingPrayerTimes ? (
          <div className="flex justify-center items-center h-32">
            <div className="text-3xl text-blue-600 animate-spin">
              <FaStarAndCrescent />
            </div>
          </div>
        ) : prayerTimes ? (
          <div className="space-y-3">
            {prayerNames.map((prayer, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl ${
                  index % 2 === 0 ? "bg-blue-50" : "bg-indigo-50"
                } border border-gray-100 transition-all duration-200 hover:shadow-md`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-2">{prayer.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {prayer.name}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {prayer.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">
                      {prayerTimes[prayer.key].substring(0, 5)} -{" "}
                      {prayerTimes[prayer.endTimeKey].substring(0, 5)}
                    </div>
                    <div className="text-xs text-gray-500">শুরু - শেষ</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-gray-600">নামাজের সময়সূচী লোড করা যাচ্ছে না</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PrayerTimesCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [hijriDate, setHijriDate] = useState(null);
  const [isLoadingPrayerTimes, setIsLoadingPrayerTimes] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPrayerTimes() {
      setIsLoadingPrayerTimes(true);
      setError(null);
      try {
        const dateStr = format(selectedDate, "dd-MM-yyyy");
        const res = await fetch(
          `https://api.aladhan.com/v1/timingsByCity/${dateStr}?city=Dhaka&country=Bangladesh&method=1`
        );
        const data = await res.json();
        if (data.code === 200) {
          setPrayerTimes(data.data.timings);
          setHijriDate(data.data.date.hijri);
        } else {
          throw new Error(`API error: ${data.status}`);
        }
      } catch (error) {
        console.error("Error fetching prayer times:", error);
        setError(error.message);
      } finally {
        setIsLoadingPrayerTimes(false);
      }
    }
    fetchPrayerTimes();
  }, [selectedDate]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
          <div className="text-5xl text-red-500 mb-4">
            <FaStarAndCrescent />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            নামাজের সময়সূচী লোড করা যাচ্ছে না
          </h2>
          <p className="text-gray-600 mb-4">
            {error || "দুঃখিত, সার্ভার থেকে ডেটা আনতে সমস্যা হচ্ছে।"}
          </p>
          <p className="text-gray-500 text-sm mb-6">
            অনুগ্রহ করে কিছুক্ষণ পরে আবার চেষ্টা করুন।
          </p>
          <div className="flex gap-3 justify-center">
            <button
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium shadow-md transition-transform hover:scale-105 active:scale-95"
              onClick={() => window.location.reload()}
            >
              পুনরায় চেষ্টা করুন
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-8 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 mt-12 mx-1 lg:mx-2 mb-2 rounded-lg border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-2 shadow-lg transition-transform hover:scale-105">
            <FaMosque className="text-white text-3xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800 mb-3 pt-4">
            নামাজের সময়সূচী
          </h1>
          <p className="text-lg text-gray-600 mb-6">ঢাকা, বাংলাদেশ</p>
        </div>
        {/* Desktop View */}
        <DesktopView
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          prayerTimes={prayerTimes}
          hijriDate={hijriDate}
          isLoadingPrayerTimes={isLoadingPrayerTimes}
        />
        {/* Mobile View */}
        <MobileView
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          prayerTimes={prayerTimes}
          hijriDate={hijriDate}
          isLoadingPrayerTimes={isLoadingPrayerTimes}
        />
        {/* Footer */}
        {/* <div className="mt-8 text-center text-gray-600">
                    <p>তথ্য সরবরাহ করেছে আলাদান এপিআই • সময়সূচী সামান্য ভিন্ন হতে পারে</p>
                </div> */}
      </div>
    </section>
  );
}
