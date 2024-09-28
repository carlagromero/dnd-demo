import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void; // Función que se llama al buscar
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        style={{ padding: "10px", width: "200px", borderRadius: "4px" }} // Estilo simple
      />
      <button type="submit" style={{ padding: "10px", marginLeft: "5px" }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
