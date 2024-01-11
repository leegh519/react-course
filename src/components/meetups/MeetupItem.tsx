import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoriteContext from "../../store/favorite-context";

export interface MeetupItemProps {
  id: string;
  title: string;
  address: string;
  description: string;
  image: string;
}

const MeetupItem = (props: MeetupItemProps) => {
  const favoriteCtx = useContext(FavoriteContext);

  const isFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavorite() {
    if (isFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite(props);
    }
  }

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
          <button onClick={toggleFavorite}>
            {isFavorite ? "좋아요 취소" : "좋아요!"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
