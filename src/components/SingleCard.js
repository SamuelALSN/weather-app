import React, { Component } from 'react';
import axios from 'axios'
const APPID = 'dc938a560c7c42ac9102fe9c0baba58f'

class SingleCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: null
        }
    }


    componentDidUpdate() {
        axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=Lomé&country=TOGO&days=5&key=${APPID}`)
            .then(result => this.setState({
                results: result.data.data
            }))
            .catch(error => error)

    }
    
    render() {
        const { results } = this.state
        console.log(results)
        return (
            <div className='card-wrapper'>
                { 
                    results.map((item, i) =>
                        item.valid_date === this.props.params.id &&
                        <section key={i} className="card anim-flip">
                            <header>
                                <h1 className="card-header">{this.getDay(item.valid_date)}</h1>
                            </header>
                            <p className="card-temp box-highlight">{item.min_temp}</p>
                            <p className="card-temp box-highlight">{item.max_temp}</p>
                            <div className="icon">
                                <div className="cloud-group">
                                    <img src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`} alt={item.weather.description} />
                                </div>

                            </div>
                            <p className="card-info">{item.weather.description}</p>
                        </section>

                    )
                }
                
            </div>
        );
    }
}

export default SingleCard