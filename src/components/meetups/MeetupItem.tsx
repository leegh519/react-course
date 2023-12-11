import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export interface MeetupItemProps {
  id: string;
  title: string;
  address: string;
  description: string;
  image: string;
}

const MeetupItem = (props: MeetupItemProps) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>좋아요!</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
