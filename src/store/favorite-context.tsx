import { createContext, useState } from "react";
import { MeetupItemProps } from "../components/meetups/MeetupItem";
import { ReactChildren } from "../components/layout/Layout";

export interface FavoriteItem {
  favorites: MeetupItemProps[];
  totalFavorites: number;
  addFavorite: (favoriteMeetup: MeetupItemProps) => void;
  removeFavorite: (id: string) => void;
  itemIsFavorite: (id: string) => boolean;
}

const FavoriteContext = createContext<FavoriteItem>({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (id) => {},
  itemIsFavorite: (id) => false,
});

export function FavoriteContextProvider(props: ReactChildren) {
  const [userFavorites, setUserFavorites] = useState<MeetupItemProps[]>([]);

  function addFavoriteHandler(favoriteMeetup: MeetupItemProps) {
    // setState가 즉시 동작하는게 아니라 딜레이가 있기 때문에
    // 이렇게 작성하면 userFavorites가 최신데이터임을 보장할 수 없다.
    // setUserFavorites(userFavorites.concat(favoriteMeetup));

    // 이렇게 해야 실행시점에 최신 상태를 참조할 수 있음.
    setUserFavorites((prev) => {
      return prev.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(id: string) {
    setUserFavorites((prev) => {
      return prev.filter((meetup) => meetup.id !== id);
    });
  }

  function itemIsFavoriteHandler(id: string) {
    return userFavorites.some((meetup) => meetup.id === id);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
