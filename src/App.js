import React from "react";
import Recipe from "./components/Recipe";
import { data } from "./data";

function App() {
  const [click, setClick] = React.useState(data);

  const clickHandler = () => {
    let test = click.filter((click) => click.time === "Breakfast")
    setClick(test)
    console.log(test);
    
  }

  const lunchFunc = () => {
    let lunch = click.filter(click => click.time === "Lunch")
    setClick(lunch)
    console.log(lunch);
  }

  return (
    <div className="container">
      <h1 >Ou<span className="underline">r Me</span>nu</h1>
      <div className="buttonContainer">
        <button className="buttonProps" onClick={() => setClick(data)}>All</button>
        <button className="buttonProps"  onClick={() => clickHandler(data.time)}>Breakfast</button>
        <button className="buttonProps" onClick={() => lunchFunc(data.time)}>Launch</button>
        <button className="buttonProps">Shakes</button>
      </div>

      <div className="wrapper" key={data.id}>
      {click.map((food) => (
        <div >
        <Recipe {...food} onClick={() => {clickHandler(); lunchFunc()}}/>  
        </div>

      ))}
      </div>
    </div>
  );
}

export default App;
