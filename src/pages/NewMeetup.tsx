import { useHistory } from "react-router-dom";
import NewMeetupForm, { MeetupData } from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const history = useHistory();

  function addMeetupHandler(meetupData: MeetupData) {
    fetch("api", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
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
