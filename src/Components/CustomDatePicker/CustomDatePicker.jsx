import React, { useState } from "react";
import { DatePicker } from "rsuite";
import { FaCalendarAlt } from "react-icons/fa";
import "rsuite/dist/rsuite.min.css"; // Ensure RSuite styles are loaded

const CustomDatePicker = ({ placeholder = "Select a date", ...props }) => {
  // State to manage the selected date and calendar visibility
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  // Format the date to dd-mm-yyyy
  const formatDate = (date) => {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date); // Update selected date
    setIsOpen(false); // Close the calendar after selecting a date
  };

  return (
    <div className="custom-date-picker">
      {isOpen ? (
        // Show DatePicker when open
        <DatePicker
          {...props}
          value={selectedDate}
          onChange={handleDateChange}
          onClose={() => setIsOpen(false)} // Close on calendar close event
          style={{ width: "auto" }}
          placeholder={placeholder}
          inline
        />
      ) : (
        // Show calendar icon or formatted selected date
        <div
          onClick={() => setIsOpen(true)} // Open calendar on click
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer"
          }}
        >
          {selectedDate ? (
            <span>{formatDate(selectedDate)}</span> // Show formatted date
          ) : (
            <FaCalendarAlt style={{ fontSize: "15px", color: "#2c7d77" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
