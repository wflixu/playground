import * as React from 'react';
import './App.css';


interface IProps {
  color: string,
  size?: string,
}
interface IState {
  count: number,
}

class App extends React.Component<IProps, IState> {
  public readonly state: Readonly<IState> = {
    count: 1,
  }
  public componentDidMount () {
    this.setState({count:2})
  }

  public render () {
    return (
      <div>Hello world</div>
    )
  }
}

export default App;
