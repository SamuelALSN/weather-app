import React, { Component } from 'react'
import Card from './components/WeatherCard'
import axios from 'axios'
import './App.css'
// SET OF URL CONSTANTS 
// const APPID = '92a66c3676ed75bda5d59d210a5a8c75'
const APPID ='dc938a560c7c42ac9102fe9c0baba58f'
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
      weatherData: result.data.data
    })
  }

  componentDidMount() {
    axios.get(`http://api.weatherbit.io/v2.0/forecast/daily?city=Lomé&country=TOGO&days=5&key=${APPID}`)
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