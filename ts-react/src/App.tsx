import * as React from 'react';





// import { Board } from "./components/Board";
// import { RestartBtn } from "./components/RestartBtn";
// import { GameStateBar } from "./components/GameStateBar";

import 'bootstrap/dist/css/bootstrap.css'
// import Counter from './components/count';
import './App.css';
// import { FCCounter } from './components/fccounter';

// import { FCSpreadAttributes } from './components/Hello';
// import { ClassCounterWithDefaultProps } from './components/counter';
import { MouseProvider } from './components/mouse-provider';



class App extends React.Component<{}, { count: number }> {
  state = { count: 0 };




  public render() {
    return (
      <div className="app">
        <MouseProvider
          render={mouse => (
            <p>The mouse position is {mouse.x}, {mouse.y}</p>
          )}
        />
      </div>
    )
  }
}

export default App;
