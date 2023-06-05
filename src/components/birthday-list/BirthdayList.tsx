import Birthday from "../../models/Birthday";

interface BirthdayListProps {
  birthdays: Birthday[];
}

const BirthdayList = ({ birthdays }: BirthdayListProps) => {
  if (birthdays.length === 0) return <p>No birthdays to display</p>;

  return (
    <div>
      <ul>
        {birthdays.map(birthday => (
          <li key={birthday.id}>
            {birthday.personName} - {birthday.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BirthdayList;
