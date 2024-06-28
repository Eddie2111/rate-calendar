"use client";
import { DateRange, RangeKeyDict } from "react-date-range";

import { useDateContext } from "@/contexts/dateContext";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function RangePicker() {
  const { starting_date, ending_date, setStartingDate, setEndingDate } =
    useDateContext();

  const onChange = (ranges: RangeKeyDict) => {
    const { selection } = ranges;
    if (selection.startDate && selection.endDate) {
      setStartingDate(selection.startDate);
      setEndingDate(selection.endDate);
      console.log("at context", selection.startDate, selection.endDate);
    }
  };

  return (
    <DateRange
      className="shadow-md shadow-slate-400 mx-4 -mt-16 rounded-lg scale-120"
      ranges={[
        { startDate: starting_date, endDate: ending_date, key: "selection" },
      ]}
      onChange={onChange}
    />
  );
}
