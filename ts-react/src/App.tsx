import * as React from 'react';


// import { Board } from "./components/Board";
// import { RestartBtn } from "./components/RestartBtn";
// import { GameStateBar } from "./components/GameStateBar";

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import Counter from './pages/counter/views/counter';


class App extends React.Component<{}, { count: number }> {
  state = { count: 0 };




  public render() {
    return (
      <div className="app">
         <Counter />
      </div>
    )
  }
}

export default App;
