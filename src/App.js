import Recipe from "./components/Recipe";
import { data } from "./data";

function App() {
  return (
    <div className="container">
      <h1 >Ou<span className="underline">r Me</span>nu</h1>
      <div className="buttonContainer">
        <button className="buttonProps">All</button>
        <button className="buttonProps">Breakfast</button>
        <button className="buttonProps">Launch</button>
        <button className="buttonProps">Shakes</button>
      </div>

      <div className="wrapper" key={data.id}>
      {data.map((food) => (
        <div >
        <Recipe {...food}/>  
        </div>

      ))}
      </div>
    </div>
  );
}

export default App;
