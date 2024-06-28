// lib/api.ts
import axios from "axios";

export const fetchRateCalendarData = async () => {
  const response = await axios.get(
    "https://api.bytebeds.com/api/v1/property/1/room/rate-calendar/assessment",
    {
      params: {
        start_date: "2024-05-01",
        end_date: "2024-05-15",
      },
    }
  );
  return response.data;
};
