import { DateValue } from '@nextui-org/react';

export interface InputCalendarProps {
  label: string;
  setDate: (val: any) => void;
  showCalendar: boolean;
  handleCloseCalendar: (val: boolean) => (void);
  errorMessage?: string;
  unavailableDates?: (date: DateValue) => boolean;
}
