import { useState , useEffect} from "react";
import "./App.css";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";

function App() {
  const [results,setResults] = useState([])

  return (
    <>
      <div className="body">
        <div className="con">
          <SearchBar setResults={setResults}/>
          <Results results={results} />
        </div>
      </div>
    </>
  );
}

export default App;
