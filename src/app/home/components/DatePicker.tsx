"use client";
import {
  CalenderProps,
  RatePlansProps,
  InventoryCalenderProps,
  DataProps,
  ResponseProps,
} from "@/types/response.d";
import React from "react";

import { useDateContext } from "@/contexts/dateContext";

import RangePicker from "./RangePicker";

const DatePickerSection = () => {
  const { starting_date, ending_date, setStartingDate, setEndingDate } =
    useDateContext();

  return (
    <div className="border-1 border-slate-200 shadow-md shadow-slate-400 mx-4 p-8 duration-300">
      <div className="flex md:flex-row flex-col justify-between">
        <div className="flex flex-col">
          <h1 className="mb-12 text-6xl">Rate Calendar Data</h1>
          <div className="flex flex-row gap-6 my-4">
            <p className="text-[24px]">Selected Starting Date: </p>
            <input
              className="border-1 border-slate-300 bg-cyan-200 shadow-md shadow-slate-400 px-2 rounded-lg text-[24px] text-center"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStartingDate(new Date(e.target.value))
              }
              type="date"
              value={starting_date.toISOString().split("T")[0]}
            />
          </div>
          <div className="flex flex-row gap-6 my-4">
            <p className="text-[24px]">Selected Ending Date: </p>
            <input
              className="border-1 border-slate-300 bg-cyan-200 shadow-md shadow-slate-400 px-2 rounded-lg text-[24px] text-center"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEndingDate(new Date(e.target.value))
              }
              type="date"
              value={ending_date.toISOString().split("T")[0]}
            />
          </div>
          <p className="mt-16 text-[18px]">Or select from the date picker </p>
          <p className="mt-2 text-[16px]">Double click to select a hotel </p>
          <p className="text-[16px]">
            Do reselect a hotel again after changing dates{" "}
          </p>
        </div>
        <div>
          <RangePicker />
        </div>
      </div>
    </div>
  );
};

export default DatePickerSection;
