import React from "react";

const Results = ({ results }) => {

    const onClick = (item)=>{
        alert("You have clicked on " + item.name)
        let input = document.getElementsByClassName('bar')[0]
        input.value = item.name
    }
  return (
    <div className="results">
      {results.map((item, index) => (
        <div
          key={index}
          onClick={() => onClick(item)}
          className="result"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Results;
