"use client";
import {
  CalenderProps,
  RatePlansProps,
  InventoryCalenderProps,
  DataProps,
  ResponseProps,
} from "@/types/response.d";
import React, { useEffect, useRef, useState } from "react";

import { useRateCalendarData } from "@/hooks/useRateCalenderData";
import { DateContextProvider, useDateContext } from "@/contexts/dateContext";

import DataFetcher from "./components/DataFetcher";
import DatePickerSection from "./components/DatePicker";
import HotelDetails from "./components/HotelDetails";
import RangePicker from "./components/RangePicker";
import HotelSelector from './components/HotelSelector';

const Component = () => {
  return (
    <DateContextProvider>
      <DatePickerSection />
      <DataFetcher />
    </DateContextProvider>
  );
};

export default Component;
