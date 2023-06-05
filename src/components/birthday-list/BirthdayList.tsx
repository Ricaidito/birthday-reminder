import Birthday from "../../models/Birthday";
import BirthdayCard from "../birthday-card/BirthdayCard";
import "./BirthdayList.css";

interface BirthdayListProps {
  birthdays: Birthday[];
  deleteBirthdaybyId: (birthdayId: string) => void;
}

const BirthdayList = ({ birthdays, deleteBirthdaybyId }: BirthdayListProps) => {
  if (birthdays.length === 0) {
    return (
      <div className="p-4">
        <p className="bd-empty">Nothing to see here. Try to add a birthday!</p>
      </div>
    );
  }

  return (
    <div>
      {birthdays.map(birthday => (
        <BirthdayCard
          key={birthday.id}
          birthday={birthday}
          deleteBirthdaybyId={deleteBirthdaybyId}
        />
      ))}
    </div>
  );
};

export default BirthdayList;
