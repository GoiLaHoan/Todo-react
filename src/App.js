import Header from "./components/header/Header";
import "./App.css"
import Todolist from "./components/todolist/Todolist";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <Todolist/>
      </div>
    </div>
  );
}

export default App;
