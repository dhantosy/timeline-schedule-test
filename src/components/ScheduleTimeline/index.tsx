import { ChangeEvent, useState } from 'react';
import Timeline from 'react-calendar-timeline-4ef';
import moment from 'moment';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6';
import { ScheduleTimelineProps } from './types'

export default function ScheduleTimeline({ groups, items, onSearch }: ScheduleTimelineProps) {
  const [visibleTimeStart, setVisibleTimeStart] = useState(moment().startOf('month').month(0).valueOf());
  const [visibleTimeEnd, setVisibleTimeEnd] = useState(moment().startOf('month').month(2).valueOf());
  const timeDistance = visibleTimeEnd - visibleTimeStart;

  const onPrevClick = () => {
    setVisibleTimeStart(visibleTimeStart - timeDistance);
    setVisibleTimeEnd(visibleTimeEnd - timeDistance);
  };

  const onNextClick = () => {
    setVisibleTimeStart(visibleTimeStart + timeDistance);
    setVisibleTimeEnd(visibleTimeEnd + timeDistance);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e);
  };

  return (
    <div className='relative px-10'>
      <input type='text' className='absolute z-10 rounded px-2 py-1 left-14 top-3 max-w-[165px] focus-visible:outline-none' placeholder='Search' onChange={(e) => handleChange(e)} />
      <div className='absolute z-10 right-10 -top-1 flex text-slate-900 items-center bg-white'>
        <div onClick={onPrevClick} className='cursor-pointer'>
          <FaCaretLeft size={33} />
        </div>
        <div onClick={onNextClick} className='cursor-pointer'>
          <FaCaretRight size={33} />
        </div>
      </div>
      <Timeline
        groups={groups}
        items={items}
        visibleTimeStart={visibleTimeStart}
        visibleTimeEnd={visibleTimeEnd}
        sidebarWidth={200}
        itemHeightRatio={0.5}
        lineHeight={60}
      />
    </div>
  )
};
