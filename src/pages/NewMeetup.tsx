import { useHistory } from "react-router-dom";
import NewMeetupForm, { MeetupData } from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const history = useHistory();

  function addMeetupHandler(meetupData: MeetupData) {
    fetch(
      "https://flutter-firebase-5427f-default-rtdb.firebaseio.com/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
  );
};

export default NewMeetupPage;
