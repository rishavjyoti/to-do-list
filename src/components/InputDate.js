import React from "react";
import { useField } from "formik";
import { DatePicker } from "@fluentui/react";


const InputDate = ({ label, ...props }) => {
  const [field, meta, form] = useField(props);
  const DayPickerStrings = {
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    
      shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    
      shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    
      goToToday: 'Go to today',
      prevMonthAriaLabel: 'Go to previous month',
      nextMonthAriaLabel: 'Go to next month',
      prevYearAriaLabel: 'Go to previous year',
      nextYearAriaLabel: 'Go to next year',
      closeButtonAriaLabel: 'Close date picker',
      monthPickerHeaderAriaLabel: '{0}, select to change the year',
      yearPickerHeaderAriaLabel: '{0}, select to change the month',
  };

  return (
    <DatePicker
      value={field.value}
      onSelectDate={(e) => {
        form.setValue(e);
      }}
      firstDayOfWeek={0}
      strings={DayPickerStrings}
      placeholder={label}
      label={label}
      ariaLabel={label}
    />
  );
};

export default InputDate;
