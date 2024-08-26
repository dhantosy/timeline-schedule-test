import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import moment from 'moment';
import InputCalendar from '@/components/InputCalendar';
import Button from '@/components/Button';
import { FormProps } from './types';

type Inputs = {
  user: string
};

export default function Form({ onFormSubmit, errorMessage }: FormProps) {
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isValid }
  } = useForm<Inputs>();

  const handleStartDateChange = (val: string) => {
    setSelectedStartDate(val);
  };

  const handleEndDateChange = (val: string) => {
    setSelectedEndDate(val);
  };

  const closeStartCalendar = (evt: boolean) => {
    setShowStartCalendar(evt);
  };

  const closeEndCalendar = (evt: boolean) => {
    setShowEndCalendar(evt);
  };

  const unavailableStartDates = (date: any) => {
    const parseDate = Date.parse(date.toString());
    const formatDate = moment(parseDate).format('DD MMM YYYY');

    return moment(formatDate).isAfter(selectedEndDate);
  };

  const unavailableEndDates = (date: any) => {
    const parseDate = Date.parse(date.toString());
    const formatDate = moment(parseDate).format('DD MMM YYYY');
    return moment(formatDate).isBefore(selectedStartDate);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const formData = {
      user: data.user,
      start: selectedStartDate,
      end: selectedEndDate
    };
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col'>
        <fieldset className='mb-4'>
          <label htmlFor='user' className='text-slate-600 font-medium opacity-70 text-sm'>User</label>
          <input
            type='text'
            className='block mt-1 px-4 py-2 w-full border border-slate-200 rounded-xl disabled:bg-white focus:border-slate-200 focus:shadow-sm focus-visible:outline-0 focus-visible:border-slate-400'
            placeholder='User name'
            {...register('user', {
              required: true
            })}
          />
        </fieldset>
        <div className='flex -mx-2 mb-4'>
          <fieldset className='grow-0 shrink-0 basis-1/2 px-2'>
            <InputCalendar
              label='Select Start Date'
              setDate={handleStartDateChange}
              showCalendar={showStartCalendar}
              handleCloseCalendar={closeStartCalendar}
              unavailableDates={selectedEndDate ? unavailableStartDates : undefined}
            />
          </fieldset>
          <fieldset className='grow-0 shrink-0 basis-1/2 px-2'>
            <InputCalendar
              label='Select End Date'
              setDate={handleEndDateChange}
              showCalendar={showEndCalendar}
              handleCloseCalendar={closeEndCalendar}
              unavailableDates={unavailableEndDates}
            />
          </fieldset>
        </div>
        {errorMessage && (
          <p className='text-center my-4 text-red-500'>{errorMessage}</p>
        )}
        <Button type='submit' disabled={!isValid || !selectedEndDate || !selectedStartDate} variant='primary' size='medium' roundness='round' className='min-w-40 w-full md:w-auto'>
          Submit
        </Button>
      </div>
    </form>
  )
};
