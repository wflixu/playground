import * as React from 'react';

import { createStore } from 'redux';
import counter from './reducers';

const store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })

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
              <Counter  value={store.getState()}
                 onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => store.dispatch({ type: 'DECREMENT' })}/>
                {/* <Board /> 
                <div >
                    <span className="description t1"> Player(X) </span>                
                    <span className="description t2"> Computer(O) </span>
                    <RestartBtn />     
                   <GameStateBar />     
                </div>
                     */}
            </div> 
    )
  }
}

export default App;
