import React from "react";

const Results = ({ results, setText }) => {
  return (
    <div className="results">
      {results.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            alert("You have clicked on " + item.name)
            setText(item.name)
          }}
          className="result"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Results;
