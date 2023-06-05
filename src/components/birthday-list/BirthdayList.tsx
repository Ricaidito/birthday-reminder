import Birthday from "../../models/Birthday";

interface BirthdayListProps {
  birthdays: Birthday[];
  deleteBirthdaybyId: (birthdayId: string) => void;
}

const BirthdayList = ({ birthdays, deleteBirthdaybyId }: BirthdayListProps) => {
  if (birthdays.length === 0) return <p>No birthdays to display.</p>;

  return (
    <div>
      {birthdays.map(birthday => (
        <div key={birthday.id}>
          <p>Name: {birthday.personName}</p>
          <p>Birthday date: {birthday.date}</p>
          <button onClick={() => deleteBirthdaybyId(birthday.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BirthdayList;
