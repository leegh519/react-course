import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
import { MeetupItemProps } from "../components/meetups/MeetupItem";

const AllMeetupPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState<MeetupItemProps[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("api")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        const meetups: MeetupItemProps[] = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
        console.log(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>로딩...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups}></MeetupList>
    </section>
  );
};

export default AllMeetupPage;
