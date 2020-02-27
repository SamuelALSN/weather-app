import React, { Component } from 'react'

import Card from './components/Card'
import data from './data.json'
import './App.css'

class App extends Component {
  render() {
    console.log(data)
    return (
      <div className='App'>
        <CardWrapper>
          <Card
            list={data}
          />
        </CardWrapper>
      </div>
    );
  }
}



const CardWrapper = ({ children }) => {
  return (
    <div className="container">
        {children}
    </div>
  )
}





export default App;