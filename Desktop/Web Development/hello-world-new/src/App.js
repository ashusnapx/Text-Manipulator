import logo from './logo.svg';
import './App.css';
import Greet from "./Components/Greet"
import Kaise from './Components/Kaise';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';

function App() {
  return (
    <div className="App">
      <Greet />
      <Kaise></Kaise>
      <Welcome />
      <Hello />
    </div>
  );
}

export default App;
