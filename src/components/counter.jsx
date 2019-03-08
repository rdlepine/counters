import React, { Component } from 'react'

class Counter extends Component {
    
    formatCount() {
        const {counter} = this.props
        return counter.value === 0?'Zero':counter.value
    }

    styles = {
        fontSize: 22,
        fontWeight: 'bold',
    }

   
    getBatchClasses() {
        const {counter} = this.props
        let classes = "badge m-2 ";
        classes += (counter.value === 0) ? 'badge-warning' : 'badge-primary';
        return classes;
    }

   
    render() { 

        const {onDelete, onIncrement,counter, onDecrement} = this.props
        
        return ( 
            <div className="row">
                <h4>{this.props.counter._id}</h4>
  
                <div className="col-1">
                    <span className={this.getBatchClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button onClick={() => onIncrement(counter)} 
                            className="btn btn-secondary btn-sm m-2">+</button>
                    <button onClick={() => onDecrement(counter)} disabled={counter.value === 0} 
                            className="btn btn-secondary btn-sm m-2">-</button>
                    <button onClick={() => onDelete(this.props.counter._id)} 
                            className="btn btn-danger btn-sm">X</button>
                    </div>
                
 
            </div>
         )

    }

 
}
 
export default Counter

