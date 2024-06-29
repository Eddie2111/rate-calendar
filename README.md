# Rate Calendar App 
Overview

## The Rate Calendar App is a web component that displays room rates and availability over a specified date range. It uses the given tech stack and fetches data from the Rate Calendar API. The app's layout and behavior follow the provided guidelines and specifications.
### Tech Stack

    TypeScript
    ReactJS / NextJS
    Material UI
    React Query

## Features
### Date Range Picker

    Displays a date range picker at the top to select the date range (e.g., 06/23/2024 – 08/23/2024).
    Fetches data from the API based on the selected date range.

### Room Category Section

Displays each room category provided in the API response. For each room category, the following information is shown:

    Room Name: The name of the room (e.g., "Deluxe Room").
    Room Status: Indicates whether the room is sellable (true) or not (false).
    Rooms to Sell: The number of rooms available for sale.
    Net Booked: The number of rooms already booked.

### Rate Plan

Displays each rate plan provided in the API response. For each rate plan, the following information is shown:

    Name of the Rate Plan
    Occupancy: The number of people the room can accommodate.
    Rate: The price for the room of that rate plan.
    Minimum Length of Stay: The minimum number of nights required for booking.
    Reservation Deadline: The minimum number of days in advance that a reservation must be made.

## UI Components and Layout

    Header: A header with the title "Rate Calendar".
    Date Range Picker: Positioned below the header.
    Room Category Sections: Below the date range picker, each room type section is clearly separated with all relevant data displayed in a tabular format.
    Horizontally Scrollable Rate Calendar: To display more date-wise inventory and rates.
    Vertically Scrollable Rate Calendar: To display multiple category and rate plans if available.
    Material UI: The UI is built using Material UI components.

## API Integration

    Uses React Query to fetch data from the Rate Calendar API.
    Handles loading and error states appropriately.

## Dependencies
```
"dependencies": {
  "@emotion/cache": "^11.11.0",
  "@emotion/react": "^11.11.4",
  "@emotion/styled": "^11.11.5",
  "@fontsource/roboto": "^5.0.13",
  "@mui/icons-material": "^5.15.20",
  "@mui/material": "^5.15.20",
  "@mui/material-nextjs": "^5.15.11",
  "@tanstack/react-query": "^5.45.1",
  "@types/react-date-range": "^1.4.9",
  "axios": "^1.7.2",
  "next": "14.2.4",
  "react": "^18",
  "react-date-range": "^2.0.1",
  "react-dom": "^18",
  "react-query": "^3.39.3"
},
"devDependencies": {
  "@tanstack/eslint-plugin-query": "^5.43.1",
  "@types/node": "^20",
  "@types/react": "^18",
  "@types/react-dom": "^18",
  "eslint": "^8",
  "eslint-config-next": "14.2.4",
  "postcss": "^8",
  "tailwindcss": "^3.4.1",
  "typescript": "^5"
}
```

## Implementation

### Home Page

The home page contains the date-picking component and buttons to show the details of each room upon clicking. The buttons are labeled with the names of the rooms.

## Components
### DateRangePicker

A component that allows users to select a date range.

### RoomCategory

A component that displays the details of each room category, including room status, rooms to sell, and net booked.

### RatePlan

A component that displays the details of each rate plan, including occupancy, rate, minimum length of stay, and reservation deadline.

### API Handling

Using React Query to fetch data from the Rate Calendar API and manage the loading and error states.

## How to Run

    Clone the repository.
    Install dependencies using npm install or yarn install.
    Run the development server using npm run dev or yarn dev.
    Open the browser and navigate to http://localhost:3000.
