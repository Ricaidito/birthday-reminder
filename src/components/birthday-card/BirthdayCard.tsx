import Birthday from "../../models/Birthday";
import "./BirthdayCard.css";

interface BirthdayCardProps {
  birthday: Birthday;
  deleteBirthdaybyId: (birthdayId: string) => void;
  number: number;
}

const BirthdayCard = ({
  birthday,
  deleteBirthdaybyId,
  number,
}: BirthdayCardProps) => {
  return (
    <div className="bd-card">
      <p>
        #{number} <strong>{birthday.personName}</strong>
      </p>
      <p className="bd-para margin">
        <strong>Birthday:</strong> {birthday.date}
      </p>
      <button
        className="bd-btn hover:bg-red-500"
        onClick={() => deleteBirthdaybyId(birthday.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default BirthdayCard;
