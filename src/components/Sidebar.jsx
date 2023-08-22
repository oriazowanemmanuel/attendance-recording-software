// src/app/components/Sidebar.jsx
import React from "react";
import Link from "next/link";

const Sidebar = ({ resetSelectedClass, setSelectedClass }) => {
  const handleHistoryClick = () => {
    resetSelectedClass(); // Reset the selectedClass state
    setSelectedClass('attendancereport'); // Set selectedClass to 'attendance-report' to display the AttendanceReportPage
  };
  return (
    <div className="bg-[#A9EADA] text-white h-screen w-64 py-9 mt-0 flex flex-col position-sticky">
      <Link href="">
        <div className="flex items-center space-x-9 px-4 py-2 my-2 m-1 mt-[3rem] rounded bg-white text-black hover:bg-gray-600 hover:text-white"
          onClick={resetSelectedClass}
        >
          <i className="fas fa-tachometer-alt m-1"></i> Dashboard
        </div>
      </Link>
      <Link href="/lectures">
        <div className="flex items-center space-x-2 px-4 py-2 my-2 m-1 rounded bg-white text-black hover:bg-gray-600 hover:text-white">
          <i className="far fa-calendar-alt m-1"></i> All Lectures Today
        </div>
      </Link>
      <Link href="/calendar">
        <div className="flex items-center space-x-2 px-4 py-2 my-2 m-1 rounded bg-white text-black hover:bg-gray-600 hover:text-white">
          <i className="far fa-calendar m-1"></i> Calendar
        </div>
      </Link>
      <Link href="">
        <div className="flex items-center space-x-2 px-4 py-2 my-2 m-1 rounded bg-white text-black hover:bg-gray-600 hover:text-white"
          onClick={handleHistoryClick}
        >
          <i className="fa-solid fa-user-graduate m-1"></i> History
        </div>
      </Link>
      <Link href="/logout">
        <div className="flex items-center space-x-2 px-4 py-2 my-2 m-1 rounded bg-white text-black hover:bg-gray-600 hover:text-white">
          <i className="fas fa-sign-out m-1"></i> Logout
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;