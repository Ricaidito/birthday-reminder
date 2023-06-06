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
  const formatDate = (date: string) => {
    const splittedDate = date.split("-");
    const [year, month, day] = splittedDate;
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="bd-card relative">
      <p>
        <strong>{birthday.personName}</strong>
      </p>
      <p className="bd-para margin">
        <strong>Birthday:</strong> {formatDate(birthday.date)}
      </p>
      <p className="absolute pos opacity-25">#{number}</p>
      <div className="absolute trash-pos">
        <button
          className="bd-btn"
          onClick={() => deleteBirthdaybyId(birthday.id)}
        >
          🗑
        </button>
      </div>
    </div>
  );
};

export default BirthdayCard;
