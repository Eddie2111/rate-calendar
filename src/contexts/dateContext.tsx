"use client";
import { createContext, useContext, useState } from "react";

interface DateContextProps {
  starting_date: Date;
  ending_date: Date;
  setStartingDate: (date: Date) => void;
  setEndingDate: (date: Date) => void;
}

const DateContext = createContext<DateContextProps>({
  starting_date: new Date(),
  ending_date: new Date(),
  setStartingDate: () => {},
  setEndingDate: () => {},
});

export function useDateContext() {
  return useContext(DateContext);
}

export function DateContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [starting_date, setStartingDate] = useState<Date>(
    new Date("2024-05-01")
  );
  const [ending_date, setEndingDate] = useState<Date>(new Date("2024-05-15"));

  return (
    <DateContext.Provider
      value={{
        starting_date,
        ending_date,
        setStartingDate,
        setEndingDate,
      }}
    >
      {children}
    </DateContext.Provider>
  );
}
