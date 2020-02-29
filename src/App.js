import React, { Component } from 'react'
import Card from './components/Card'
import axios from 'axios'
import './App.css'
// SET OF URL CONSTANTS 
const APPID = '92a66c3676ed75bda5d59d210a5a8c75'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null
    }
    this.onSortedData = this.onSortedData.bind(this)

  }

  onSortedData(result) {
    // const sortedData =[];
    // for (let i = 0; i < result.data.list.length; i+3) {
    //   // console.log(result.data.list[i])
    //   sortedData.push(result.data.list[i])
    // }
    this.setState({
      weatherData: result.data.list
    })
  }

  componentDidMount() {
    axios(`http://api.openweathermap.org/data/2.5/forecast?q=Lomé,togo&units=metric&type=accurate&APPID=${APPID}`)
      .then(result => this.onSortedData(result))
      .catch(error => error)
  }


  render() {
    const { weatherData } = this.state
    return (
      <div className='App'>
        <CardWrapper>
          <Card
            list={weatherData}
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