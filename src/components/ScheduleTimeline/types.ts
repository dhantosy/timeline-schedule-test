
import * as moment from 'moment'; 
import { ChangeEvent } from 'react';

interface GroupsItemProps {
  id: string,
  title: string,
}

interface ItemsProps {
  id: string,
  group: string,
  title: string,
  start_time: moment.Moment,
  end_time: moment.Moment
}

export interface ScheduleTimelineProps {
  groups: GroupsItemProps[];
  items: ItemsProps[];
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}
