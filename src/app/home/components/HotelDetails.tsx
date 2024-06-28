"use client";
import {
  CalenderProps,
  RatePlansProps,
  InventoryCalenderProps,
  DataProps,
  ResponseProps,
} from "@/types/response.d";
import { useDateContext } from "@/contexts/dateContext";

interface Current {
  id?: string;
  name?: string;
  occupancy?: number;
  inventory_calender?: InventoryCalenderProps[];
  rate_plans?: RatePlansProps[];
}

const HotelDetails = ({ data }: { data: any }) => {
  const { starting_date, ending_date } = useDateContext();

  if (data) {
    return (
      <div className="flex flex-col mx-4 md:mx-0 p-4">
        <p className="my-12">
          {" "}
          Inventory Calendar for: ({data?.data[0]?.name ?? ""})
        </p>
        <div className="border-1 border-slate-300 shadow-md p-4 rounded-lg w-[78vw] overflow-x-auto">
          <div className="flex flex-row">
            <div className="flex flex-row">
              <div>
                <p className="text-[18px]">Date</p>
                <p className="text-[18px]">Availability</p>
                <p className="text-[18px]">Status</p>
                <p className="text-[18px]">Booked</p>
              </div>
              <div className="flex flex-row">
                {data.data[0]?.inventory_calendar.map(
                  (item: InventoryCalenderProps, index: number) => (
                    <div
                      className="flex flex-col border-1 border-slate-500 mx-2"
                      key={index}
                    >
                      <div className="border-1 border-slate-500 text-[18px] text-center">
                        {
                          new Date(item.date ?? "2024-05-15")
                            .toISOString()
                            .split("T")[0]
                        }
                      </div>
                      <div className="border-1 border-slate-500 text-[18px] text-center">
                        {item.available ?? "None"} &nbsp;
                      </div>
                      <div className="border-1 border-slate-500 text-[18px] text-center">
                        {item.status ? "Active" : "Inactive"} &nbsp;
                      </div>
                      <div className="border-1 border-slate-500 text-[18px] text-center">
                        {item.booked === 0 ? "No" : item.booked} &nbsp;
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <p className="mt-4 mb-8"> Rate Plans </p>
          <div className="flex flex-row">
            <div className="flex flex-row">
              <div>
                {data.data[0]?.rate_plans.map(
                  (item: RatePlansProps, index: number) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col border-1 border-slate-300"
                      >
                        <div className="my-4 font-bold text-[24px]">
                          {item.name ?? ""}
                        </div>
                        <div className="flex flex-row justify-between gap-6">
                          <div className="flex flex-col w-56">
                            <p className="text-[18px]">Date</p>
                            <p className="text-[18px]">Rate</p>
                            <p className="text-[18px]">
                              Minimum Length of Stay
                            </p>
                            <p className="text-[18px]">Reservation Deadline</p>
                          </div>
                          <div className="flex flex-row">
                            {item?.calendar?.map(
                              (items: CalenderProps, index: number) => {
                                return (
                                  <div className="flex flex-col" key={index}>
                                    <p className="border-1 border-slate-500 mx-2 text-[18px] text-center">
                                      {new Date(items?.date ?? "2024-05-15")
                                        .toISOString()
                                        .split("T")[0]
                                        .toString()}
                                    </p>
                                    <p className="border-1 border-slate-500 mx-2 text-[18px] text-center">
                                      {items?.rate ?? 0}
                                    </p>
                                    <p className="border-1 border-slate-500 mx-2 text-[18px] text-center">
                                      {items?.min_length_of_stay ?? "--Null--"}
                                    </p>
                                    <p className="border-1 border-slate-500 mx-2 text-[18px] text-center">
                                      {items?.reservation_deadline ??
                                        "--None--"}
                                    </p>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <p className="text-[18px] text-center">Select a hotel to see data</p>
    );
  }
};

export default HotelDetails;
