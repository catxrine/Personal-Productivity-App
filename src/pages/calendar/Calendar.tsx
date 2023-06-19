import "./calendar.scss";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

export default function Calendar({ className }: { className?: string }) {
  return (
    <div className="calendar-container">
      <h2>Calendar</h2>
      <div className="calendar">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateCalendar"]}>
            <DateCalendar />
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </div>
  );
}
