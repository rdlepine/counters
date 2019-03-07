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

        const {onDelete, counter} = this.props
        
        return ( 
            <div>
                <h4>{this.props.counter._id}</h4>
               
                <span className={this.getBatchClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => onDelete(this.props.counter._id)} className="btn btn-danger btn-sm m-2">Decrement</button>
            </div>
         )

    }

 
}
 
export default Counter

