import React from 'react';
import Square from './Square';


export default class Board extends React.Component {
 

    render() {
 
        return (
            <div>
                {this.props.squares.map((line,row)=>{
                      return (<div className="board-row" key={row}>
                       {
                            line.map((sq,col)=>{
                                return <Square row={row} col={col}  handleClick={() => this.props.handleClick(row,col)} value={sq}  key={col}/>
                            })
                        }
                       </div>)
                })}
               
            </div>
        )
    }
}