import NewMeetupForm, { MeetupData } from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  function addMeetupHandler(meetupData: MeetupData) {
    fetch("api url", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
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
