import { useState } from "react";

const BookingSlots = () => {
  const days = [
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
    "Chủ nhật",
  ];
  const times = ["06h -> 11h", "11h -> 16h", "16h -> 21h"];

  // Khởi tạo số slot còn lại là 3 cho tất cả ô
  const initialSlots = Array(times.length)
    .fill()
    .map(() => Array(days.length).fill(3));

  // Lưu trạng thái số slot còn lại
  const [slots, setSlots] = useState(initialSlots);
  // Lưu trạng thái người dùng đã đăng ký slot nào
  const [selectedSlots, setSelectedSlots] = useState(
    Array(times.length)
      .fill()
      .map(() => Array(days.length).fill(false))
  );

  const handleSlotClick = (timeIndex, dayIndex) => {
    const newSlots = [...slots];
    const newSelectedSlots = [...selectedSlots];

    if (!selectedSlots[timeIndex][dayIndex]) {
      // Nếu chưa đăng ký ca, đăng ký (giảm slot)
      if (slots[timeIndex][dayIndex] > 0) {
        newSlots[timeIndex][dayIndex] -= 1;
        newSelectedSlots[timeIndex][dayIndex] = true;
      }
    } else {
      // Nếu đã đăng ký, huỷ (tăng slot lại)
      newSlots[timeIndex][dayIndex] += 1;
      newSelectedSlots[timeIndex][dayIndex] = false;
    }

    setSlots(newSlots);
    setSelectedSlots(newSelectedSlots);
  };

  return (
      <div className="w-full h-full p-6 bg-white/20 backdrop-blur-xs shadow-lg rounded-tl-4xl">
        <h2 className="text-lg font-bold text-center p-7">
          Từ ngày 20/09/2024 đến 27/09/2024
        </h2>
        <div className="grid grid-cols-[100px_repeat(7,1fr)] gap-3 mt-4">
          {/* Cột thời gian */}
          <div></div>
          {days.map((day, index) => (
            <div key={index} className="text-center font-semibold">
              {day}
            </div>
          ))}

          {/* Các ô slots */}
          {times.map((time, timeIndex) => (
            <>
              <div
                key={timeIndex}
                className="flex items-center justify-center font-semibold"
              >
                {time}
              </div>
              {days.map((_, dayIndex) => (
                <button
                key={`${timeIndex}-${dayIndex}`}
                className={`p-6 h-[200px] rounded-md text-center w-full transition-colors
                  ${
                    selectedSlots[timeIndex][dayIndex]
                      ? "bg-green-300 text-black"
                      : slots[timeIndex][dayIndex] === 0
                      ? "bg-red-400 text-gray-900 cursor-not-allowed"
                      : "bg-white hover:bg-green-300"
                  }
                `}
                disabled={slots[timeIndex][dayIndex] === 0 && !selectedSlots[timeIndex][dayIndex]}
                onClick={() => handleSlotClick(timeIndex, dayIndex)}
              >
                {slots[timeIndex][dayIndex] === 0 && !selectedSlots[timeIndex][dayIndex]
                  ? "Đã đầy"
                  : `Còn ${slots[timeIndex][dayIndex]} slot`}
              </button>
              ))}
            </>
          ))}
        </div>

        {/* Nút Next */}
        <div className="flex justify-end mt-4">
          <button className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-blue-800">
            NEXT
          </button>
        </div>
      </div>
  );
};

export default BookingSlots;
