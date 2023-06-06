import { useState } from "react";
import Birthday from "../../models/Birthday";
import BirthdayCard from "../birthday-card/BirthdayCard";
import BirthdaySearch from "../birthday-search/BirthdaySearch";
import "./BirthdayList.css";

interface BirthdayListProps {
  birthdays: Birthday[];
  deleteBirthdaybyId: (birthdayId: string) => void;
}

const BirthdayList = ({ birthdays, deleteBirthdaybyId }: BirthdayListProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const birthdaysToShow = birthdays.filter(birthday =>
    birthday.personName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (birthdays.length === 0) {
    return (
      <div className="p-4">
        <p className="bd-empty">Nothing to see here. Try to add a birthday!</p>
      </div>
    );
  }

  if (birthdaysToShow.length === 0) {
    return (
      <div>
        <BirthdaySearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="p-4">
          <p className="bd-empty">No birthdays found. Try another search...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BirthdaySearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {birthdaysToShow.map((birthday, i) => (
        <BirthdayCard
          key={birthday.id}
          number={i + 1}
          birthday={birthday}
          deleteBirthdaybyId={deleteBirthdaybyId}
        />
      ))}
    </div>
  );
};

export default BirthdayList;
