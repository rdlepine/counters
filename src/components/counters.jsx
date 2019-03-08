import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {

  

  render() {
 
    const {counters, onDelete, onIncrement, onDecrement} = this.props

    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {
            counters.map( (counter) => {
              return <Counter key={counter._id} counter={counter}
                onDelete={onDelete} onDecrement={onDecrement} onIncrement={onIncrement} />
                
            })
        }
      </div>
    )
  }
}

export default Counters
