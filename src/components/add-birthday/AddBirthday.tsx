import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Birthday from "../../models/Birthday";

interface AddBirthdayProps {
  saveBirthday: (newBirthday: Birthday) => void;
}

const AddBirthday = ({ saveBirthday }: AddBirthdayProps) => {
  const personNameRef = useRef<HTMLInputElement | null>(null);
  const dateRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const personName = personNameRef.current?.value;
    const date = dateRef.current?.value;

    const newBirthday = {
      id: uuidv4(),
      personName,
      date,
    };

    saveBirthday(newBirthday as Birthday);

    if (personNameRef.current) personNameRef.current.value = "";
    if (dateRef.current) dateRef.current.value = "";
  };

  return (
    <div>
      <h2>Add a new birthday</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="personName">Name</label>
        <input type="text" id="personName" required ref={personNameRef} />
        <label htmlFor="date">Date</label>
        <input type="date" id="date" required ref={dateRef} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddBirthday;
