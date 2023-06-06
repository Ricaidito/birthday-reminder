interface BirthdaySearchProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const BirthdaySearch = ({ searchTerm, setSearchTerm }: BirthdaySearchProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        className="placeholder-p-2 w-full p-2 placeholder-white"
        type="search"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default BirthdaySearch;
