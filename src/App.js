import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters'
import NavBar from './components/navbar'
class App extends Component {

  constructor() {
    super()
    console.log('App-Contructor')
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  state = {
    counters: [
        {_id: 1, value: 1},
        {_id: 2, value: 2},
        {_id: 3, value: 3},
        {_id: 4, value: 4},
        {_id: 5, value: 5},
    ]
  }

  updateCounter = (_id) => {
      const {counters} = this.state
      console.log(counters)
      let newArray = counters.filter( (count) => _id !== count._id )
      this.setState({counters:newArray})
  }

  handleReset = () => {
    const counters = this.state.counters.map( (c) => {
      c.value = 0
      return c
    })

    this.setState({counters})
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]

    // this.setState({counters: counters.map( (count) => {
    //   if(counter._id === count._id) {
    //     count.value += 1;
    //   }
    //   return count;
    // })})

    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++;
    this.setState({counters})

  }

  render() {

    const {counters} = this.state
  
    return (
      <React.Fragment>
        <NavBar totalCount={counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters onReset={this.handleReset}  onIncrement={this.handleIncrement} counters={counters} onDelete={this.updateCounter}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
