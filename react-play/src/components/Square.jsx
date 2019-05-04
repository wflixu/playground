import React from 'react';


export default class Square extends React.Component {
  render() {
    return (
      <button className="square"
        onClick={() => this.props.handleClick(this.props.row,this.props.col)}>
        {this.props.value}
      </button>
    )
  }
}