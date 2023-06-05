import Birthday from "../../models/Birthday";
import "./styles.css"

interface BirthdayListProps {
  birthdays: Birthday[];
  deleteBirthdaybyId: (birthdayId: string) => void;
}

const BirthdayList = ({ birthdays, deleteBirthdaybyId }: BirthdayListProps) => {
  if (birthdays.length === 0) {
    return (
      <p className="bd-empty">
        Nothing to see here. Try to add a birthday!
      </p>
    );
  }

  return (
    <div>
      {birthdays.map(birthday => (
        <div key={birthday.id} className="bd-card">
          <p className="bd-para bd-name">{birthday.personName}</p>
          <p className="bd-para margin">Birthday: {birthday.date}</p>
          <button className="bd-btn" onClick={() => deleteBirthdaybyId(birthday.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BirthdayList;
