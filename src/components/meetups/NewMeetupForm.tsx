import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

interface NewMeetupFormProps {
  onAddMeetup: (meetupData: MeetupData) => void;
}

export interface MeetupData {
  title: string;
  image: string;
  address: string;
  description: string;
}

const NewMeetupForm = (props: NewMeetupFormProps) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current?.value ?? "";
    const enteredImage = imageInputRef.current?.value ?? "";
    const enteredAddress = addressInputRef.current?.value ?? "";
    const enteredDescription = descriptionInputRef.current?.value ?? "";

    const meetupData: MeetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    console.log(meetupData);
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
