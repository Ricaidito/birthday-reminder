import { useState, useEffect } from "react";
import Birthday from "./models/Birthday";
import BirthdayList from "./components/birthday-list/BirthdayList";
import AddBirthday from "./components/add-birthday/AddBirthday";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
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

  // These functions are for testing purposes

  const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch(error => {
        console.log(error);
      });
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
      {/* These buttons are for testing purposes */}
      <button className="m-4 hover:bg-blue-500" onClick={handleGoogleLogin}>
        Login with Google
      </button>
      <button className="m-4 hover:bg-orange-500" onClick={handleSignOut}>
        Sign out
      </button>
    </div>
  );
};

export default App;
