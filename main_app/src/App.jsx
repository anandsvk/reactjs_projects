import { useState, useEffect } from "react";
import NavigationTab from "./components/NavigationTab";
import CurrentyearDetails from "./components/CurrrentYearDetails";

import "./App.css";

function App() {

  const [curYear, setCurYear] = useState(2024);

  return (
    <>
        <div className="container">
          <h1>Income and Expenses Tracker</h1>
          <NavigationTab curYear={curYear} setCurYear={setCurYear}/>
          <CurrentyearDetails curYear={curYear}/>
        </div>
    </>
  );
}

export default App;
