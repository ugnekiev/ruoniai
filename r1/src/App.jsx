
import "./App.scss";
import Square from "./Components/Square/Square";


function App() {
    

    return (
    <div className="App-header">
    
        <div>
          <h1>Total Recall</h1>
          <Square color = 'crimson'/>
        </div>

        <button onClick={() => console.log("%cBuuu", "color:green; background:red; font-size: 20px")}>BŪŪ</button>
   
    </div>

  );
}

export default App;
