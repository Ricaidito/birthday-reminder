import { useEffect, useState } from "react";
import Birthday from "../../models/Birthday";
import AddBirthday from "../add-birthday/AddBirthday";
import BirthdayList from "../birthday-list/BirthdayList";

const BirthdayPanel = () => {
  const [birthdays, setBirthdays] = useState<Birthday[]>([]);

  useEffect(() => {
    const bdays = JSON.parse(localStorage.getItem("birthdays") || "[]");
    setBirthdays(bdays);
  }, []);

  const saveBirthday = (newBirthday: Birthday) => {
    setBirthdays(prevBirthdays => [...prevBirthdays, newBirthday]);
    localStorage.setItem(
      "birthdays",
      JSON.stringify([...birthdays, newBirthday])
    );
  };

  const deleteBirthdaybyId = (birthdayId: string) => {
    const newBirthdays = birthdays.filter(
      birthday => birthday.id !== birthdayId
    );
    setBirthdays(newBirthdays);
    localStorage.setItem("birthdays", JSON.stringify(newBirthdays));
  };

  const deleteAllBirthdays = () => {
    setBirthdays([]);
    localStorage.setItem("birthdays", JSON.stringify([]));
  };

  return (
    <div>
      <h1>Birthday Reminder 🎂</h1>
      <AddBirthday saveBirthday={saveBirthday} />
      <BirthdayList
        birthdays={birthdays}
        deleteBirthdaybyId={deleteBirthdaybyId}
      />
      <button className="m-4 hover:bg-red-500" onClick={deleteAllBirthdays}>
        Delete all birthdays
      </button>
    </div>
  );
};

export default BirthdayPanel;
