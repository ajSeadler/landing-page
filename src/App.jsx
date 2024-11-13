import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="app">
        <Home />
      </div>
    </>
  );
}

export default App;
