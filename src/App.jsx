import { useState } from "react";
import "./App.css";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";

function App() {
  const [results,setResults] = useState([])
  const [text,setText] = useState("")
  return (
    <>
      <div className="body">
        <div className="con">
          <SearchBar setResults={setResults} text={text}/>
          <Results results={results} setText={setText}/>
        </div>
      </div>
    </>
  );
}

export default App;
