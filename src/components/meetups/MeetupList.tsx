import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";
import { MeetupItemProps } from "./MeetupItem";

interface MeetupListProps {
  meetups: MeetupItemProps[];
}

const MeetupList = (props: MeetupListProps) => {
  return (
    <ul>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          address={meetup.address}
          description={meetup.description}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
