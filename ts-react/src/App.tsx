import * as React from 'react';





// import { Board } from "./components/Board";
// import { RestartBtn } from "./components/RestartBtn";
// import { GameStateBar } from "./components/GameStateBar";

import 'bootstrap/dist/css/bootstrap.css'
import Counter from './components/count';
import './App.css';



class App extends React.Component<{}, {}> {
       

  public render () {
    return (
      <div className="app"> 
              <Counter />
           
            </div> 
    )
  }
}

export default App;
