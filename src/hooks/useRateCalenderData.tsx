import { useQuery } from "@tanstack/react-query";
import { fetchRateCalendarData } from "@/lib/api";
import { ResponseProps } from "@/types/response.d";

const defaultStartDate = "2024-05-01";
const defaultEndDate = "2024-05-15";

export const useRateCalendarData = (start_date?: string, end_date?: string) => {
  return useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        `https://api.bytebeds.com/api/v1/property/1/room/rate-calendar/assessment?start_date=${
          start_date ?? defaultStartDate
        }&end_date=${end_date ?? defaultEndDate}`,
        { cache: "force-cache", next: { revalidate: 1200 } }
      ).then((res) => res.json()),
  });
};
