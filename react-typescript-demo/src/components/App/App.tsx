import './App.css';
import Nav from '../Nav/Nav';
import axios from "axios";
import React, {
  useState,
  useEffect,
  Fragment,
  useRef,
  forwardRef,
} from "react";

function App() {

  useEffect(() => {
    getAirlines();
  }, []);

  const [airlines, setAirlines] = useState([{id: 0, airline: "Delta", cost: 1000, }]);

  const getAirlines = () => {
    axios({
      method: "GET",
      url: `/api/characters/basic`,
    })
      .then((response) => {
        setAirlines(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
 
      <h1>Hello World</h1>

      {airlines && airlines.map((airline) => {
              return (
                <div key={airline.id}>
                  <p>{airline.airline} costs ${airline.cost}</p>
                </div>
              );
            })}

      <Nav />

    </div>
  );
}

export default App;


