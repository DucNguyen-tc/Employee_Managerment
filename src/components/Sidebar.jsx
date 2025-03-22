import React from 'react';
import { FaBell, FaPoll, FaCog, FaDollarSign } from "react-icons/fa";
import { LuClipboardPenLine, LuUserRoundMinus } from "react-icons/lu";
import { GiPayMoney } from "react-icons/gi";
import { BiSolidErrorAlt } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen p-10 flex flex-col">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://chupanhthe.vn/img/chup-anh-the-chuan-quoc-te5.jpg" // Replace with your profile image URL
          alt="Profile"
          className="h-60"
        />       
          <h2 className="text-lg font-extrabold text-black">Nguyễn Văn A</h2>
          <p className="text-sm font-bold text-black">Employee</p>       
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <a
              href=""
              className="flex items-center p-3 text-gray-950 hover:bg-gray-200 rounded-lg"
            >
              <FaBell className="mr-3" />
              <span>Thông báo</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex items-center p-3 text-gray-950 hover:bg-gray-200 rounded-lg"
            >
              <LuClipboardPenLine className="mr-3" />
              <span>Đăng kí ca</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex items-center p-3 text-gray-950 hover:bg-gray-200 rounded-lg"
            >
              <FaPoll className="mr-3" />
              <span>Chấm công</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex items-center p-3 text-gray-950 hover:bg-gray-200 rounded-lg"
            >
              <FaDollarSign className="mr-3" />
              <span>Thanh toán</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex items-center p-3 text-gray-950 hover:bg-gray-200 rounded-lg"
            >
              <GiPayMoney className="mr-3" />
              <span>Xem thưởng</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex items-center p-3 text-gray-950 hover:bg-gray-200 rounded-lg"
            >
              <BiSolidErrorAlt className="mr-3" />
              <span>Xem lỗi</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex items-center p-3 text-gray-950 hover:bg-gray-200 rounded-lg"
            >
              <LuUserRoundMinus className="mr-3" />
              <span>Xin nghỉ phép</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex items-center p-3 text-gray-950 hover:bg-gray-200 rounded-lg"
            >
              <FaCog className="mr-3" />
              <span>Cài đặt</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

