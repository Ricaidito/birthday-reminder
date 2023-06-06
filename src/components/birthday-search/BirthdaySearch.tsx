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
        className="bg-set placeholder-p-2 w-full p-2 placeholder-white placeholder-opacity-25 rounded-lg"
        type="search"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default BirthdaySearch;
