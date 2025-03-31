import React from "react";
import { NavLink } from "react-router-dom";
import { FaBell, FaPoll, FaCog, FaDollarSign } from "react-icons/fa";
import { LuClipboardPenLine, LuUserRoundMinus, LuCalendar1 } from "react-icons/lu";
import { GiPayMoney } from "react-icons/gi";
import { BiSolidErrorAlt } from "react-icons/bi";
import employees from "../data/In4UserExample";

const SidebarUser = () => {
  const emp = employees[0];
  return (
    <div className="bg-gray-800 text-white h-screen w-64 p-4 flex flex-col fixed left-0 top-0 bottom-0">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={emp.profile_url}
          alt="Profile"
          className="h-20 w-20 rounded-full border-2 border-gray-500 mb-2"
        />
        <h2 className="text-lg font-semibold">{emp.name}</h2>
        <p className="text-sm text-gray-400">{emp.role}</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-gray-700"
            >
              <FaBell />
              <span>Thông báo</span>
            </a>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `flex items-center space-x-4 py-2.5 px-4 rounded ${
                  isActive ? "bg-white text-black" : "hover:bg-gray-700"
                }`
              }
              to="/dashboard/bookingslot"
            >
              <LuClipboardPenLine />
              <span>Đăng kí ca</span>
            </NavLink>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-gray-700"
            >
              <FaPoll />
              <span>Chấm công</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-gray-700"
            >
              <FaDollarSign />
              <span>Thanh toán</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-gray-700"
            >
              <LuCalendar1 />
              <span>Xem lịch</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-gray-700"
            >
              <GiPayMoney />
              <span>Xem thưởng</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-gray-700"
            >
              <BiSolidErrorAlt />
              <span>Xem lỗi</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-gray-700"
            >
              <LuUserRoundMinus />
              <span>Xin nghỉ phép</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* Settings */}
      <a
        href="#"
        className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700"
      >
        <FaCog />
        <span>Cài đặt</span>
      </a>
    </div>
  );
};

export default SidebarUser;
