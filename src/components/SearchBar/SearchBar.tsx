import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setQuery(newValue);

    if (newValue === "") {
      onSearch("");
    }
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        style={{ padding: "10px", width: "200px", borderRadius: "4px" }}
      />
      <button type="submit" style={{ padding: "10px", marginLeft: "5px" }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
