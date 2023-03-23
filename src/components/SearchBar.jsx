import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchApi = async (value) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
    let results = json.filter((data) => {
      if (value) {
        value = value.toLowerCase()
        if (data.name.toLowerCase().includes(value)) {
          return data;
        }
      }
    });
    setResults(results);
  };

  const onChange = (value) => {
    setInput(value);
    fetchApi(value);
  };
  return (
    <div className="search-bar">
      <FaSearch className="icon" />
      <input
        value={input}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type to search....."
        className="bar"
      />
    </div>
  );
}

export default SearchBar;
