"use client";
import {
  CalenderProps,
  RatePlansProps,
  InventoryCalenderProps,
  DataProps,
  ResponseProps,
} from "@/types/response.d";
import React, { useEffect, useRef, useState } from "react";

import HotelDetails from "./HotelDetails";

const HotelSelector = ({ data }: { data: ResponseProps }) => {
  const filteredData = useRef<DataProps[]>([]);
  const [hotel, setHotel] = useState<{ id: string; name: string }>({
    id: "",
    name: "",
  });
  const ButtonGradients: string[] = [
    "from-pink-500 to-rose-500 shadow-md shadow-pink-400/50 hover:shadow-xl duration-300",
    "from-indigo-500 to-violet-500 shadow-md shadow-violet-400/50 hover:shadow-xl duration-300",
    "from-blue-500 to-cyan-500 shadow-md shadow-blue-400/50 hover:shadow-xl duration-300",
    "from-yellow-500 to-orange-500 shadow-md shadow-yellow-400/50 hover:shadow-xl duration-300",
    "from-green-500 to-emerald-500 shadow-md shadow-green-400/50 hover:shadow-xl duration-300",
    "from-purple-500 to-fuchsia-500 shadow-md shadow-purple-400/50 hover:shadow-xl duration-300",
    "from-red-500 to-rose-500 shadow-md shadow-rose-400/50 hover:shadow-xl duration-300",
  ];

  useEffect(() => {
    if (data?.data) {
      filteredData.current = data?.data.filter((room: any): any =>
        Object.entries(hotel).every(([key, value]): any => room[key] === value)
      );
    }
  }, [data, hotel]);
  console.log(filteredData);
  if (data?.data) {
    return (
      <>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-4 my-12">
          {data.data.map((item: DataProps, index: number) => (
            <button
              key={item.id ?? index}
              onClick={() =>
                setHotel({ id: item.id ?? "", name: item.name ?? "" })
              }
              className={`text-[18px] text-white bg-gradient-to-l font-bold ${
                ButtonGradients[Math.floor(index % 7)]
              } 
            px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 active:bg-opacity-75 transition duration-300
            `}
            >
              {item.name ?? ""}
            </button>
          ))}
        </div>
        {filteredData?.current.length > 0 ? (
          <HotelDetails data={{ data: filteredData.current }} />
        ) : (
          <div className="mx-10 text-[18px]">Double click to select a room</div>
        )}
      </>
    );
  }

  return null;
};

export default HotelSelector;
