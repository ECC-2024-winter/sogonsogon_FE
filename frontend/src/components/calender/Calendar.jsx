import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import { ko } from "date-fns/locale";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(
    ({ value, onClick, className }, ref) => (
      <button className={className} onClick={onClick} ref={ref}>
        {value}
      </button>
    ),
  );

  return (
    <DatePicker
      locale={ko}
      showPopperArrow={false}
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      customInput={<ExampleCustomInput className="example-custom-input" />}
      dateFormat="yyyy.MM.dd"
    />
  );
};

export default Calendar;
