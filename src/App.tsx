import { useState, useEffect } from "react";
import Birthday from "./models/Birthday";
import BirthdayList from "./components/birthday-list/BirthdayList";
import AddBirthday from "./components/add-birthday/AddBirthday";
import "./App.css";

const App = () => {
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
      <h1>Birthday reminder</h1>
      <AddBirthday saveBirthday={saveBirthday} />
      <BirthdayList
        birthdays={birthdays}
        deleteBirthdaybyId={deleteBirthdaybyId}
      />
      <button onClick={deleteAllBirthdays}>Delete all birthdays</button>
    </div>
  );
};

export default App;
