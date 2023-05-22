import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import "../DateFormet/DateFormet.css"

const DateFormet = () => {
    const [selectedDate, setSelectedDate] = useState(23/10/2022);
  return (
    <div className=" date_formet" >
    <div className="input-group input_date d-flex direction-row">
      <div><DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy-MM-dd"
        className="form-control date_picker"
      />
      </div>
        <div className="input-group-text FaCalendarAlt">
          <FaCalendarAlt />
        </div>
    </div>
  </div>
  )
}

export default DateFormet
