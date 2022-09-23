import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu';
import Quiz from './component/Quiz';
import Score from './component/Score';
import {useState,createContext} from "react";

export const DataContext = createContext()

function App() {
  const [appState, setAppState] = useState("menu")
  return (
    <DataContext.Provider value={{appState,setAppState}}>
      <div className="App">
      <h1>Web Development Quiz</h1>
      {appState == "menu" && <Menu/>}
      {appState == "quiz" && <Quiz/>}
      {appState == "score" && <Score/>}
    </div>
    </DataContext.Provider>
  );
}

export default App;
