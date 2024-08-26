
import * as moment from 'moment'; 

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
}
