import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Birthday from "../../models/Birthday";
import "./AddBirthday.css";

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
    <div className="p-3">
      <form onSubmit={handleSubmit}>
        <div className="form-name p-2">
          <label htmlFor="personName">
            <strong>Name: </strong>
          </label>
          <input
            className="placeholder-p-2 p-2 placeholder-white"
            type="text"
            id="personName"
            placeholder="The person's name..."
            required
            ref={personNameRef}
          />
        </div>
        <div className="p-2">
          <label htmlFor="date">
            <strong>Date: </strong>
          </label>
          <input className="p-2" type="date" id="date" required ref={dateRef} />
        </div>
        <button className="m-2 hover:bg-green-600">Add birthday</button>
      </form>
    </div>
  );
};

export default AddBirthday;
