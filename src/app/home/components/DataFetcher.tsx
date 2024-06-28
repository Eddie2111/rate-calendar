"use client";
import React, { useEffect } from "react";

import { CircularProgress, Typography, Input } from "@mui/material";
import { useRateCalendarData } from "@/hooks/useRateCalenderData";
import { useDateContext } from "@/contexts/dateContext";
import HotelSelector from './HotelSelector';

const DataFetcher = () => {
  const { starting_date, ending_date } = useDateContext();
  const { data, isLoading, error, refetch } = useRateCalendarData(
    starting_date.toISOString().split("T")[0],
    ending_date.toISOString().split("T")[0]
  );

  useEffect(() => {
    refetch();
  }, [starting_date, ending_date, refetch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[12vh]">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    console.log(error);
    return <Typography>Error fetching data</Typography>;
  }

  if (data) {
    return <HotelSelector data={data} />;
  }

  return null;
};

export default DataFetcher;
