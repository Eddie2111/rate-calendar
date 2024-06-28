interface CalenderProps {
  id?: string;
  date?: string;
  rate?: number;
  min_length_of_stay?: string | null;
  reservation_deadline?: string | null;
}
interface RatePlansProps {
  id?: string;
  name?: string;
  calendar?: CalenderProps[];
}
interface InventoryCalenderProps {
  id?: string;
  date?: string;
  available?: number;
  status?: boolean;
  booked?: number;
}
interface DataProps {
  id?: string;
  name?: string;
  occupancy?: number;
  inventory_calender?: InventoryCalenderProps[];
  rate_plans?: RatePlansProps[];
}
interface ResponseProps {
  code?: string;
  message?: string;
  data?: DataProps[];
}

export type {
  CalenderProps,
  RatePlansProps,
  InventoryCalenderProps,
  DataProps,
  ResponseProps,
};
