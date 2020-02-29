import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Card extends Component {

    getDay = date => {
        let weekday = ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday']
        return weekday[new Date(date).getDay()]

    }
    render() {
        const { list } = this.props
        console.log(list)
        return (
            <div className="card-wrapper">
                {Array.isArray(list) ?
                    list.map((item, i) =>

                        <section key={i} className="card anim-flip">
                            <header>
                                <h1 className="card-header">{this.getDay(item.valid_date)}</h1>
                            </header>
                            <p className="card-temp box-highlight">{item.min_temp}</p>
                            <p className="card-temp box-highlight">{item.max_temp}</p>
                            <div className="icon">
                                <div className="cloud-group">
                                    <img src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`} alt=""/>
                                </div> 
                                
                            </div>
                            <p className="card-info">{item.weather.description}</p>
                            <span>
                                <Link to={`/previsions/${item.dt}`}>Touch</Link>
                            </span>
                        </section>

                    )
                    :
                    <section className="card anim-flip">
                        <header>
                            <h1 className="card-header">Loading... </h1>
                        </header>
                        <p className="card-temp box-highlight"></p>
                        <p className="card-temp box-highlight"></p>
                        <div className="icon">
                            <div className="cloud-group">
                                <span className="icon-cloud cloud-circle shadow-cloud-clip"></span>
                                <span className="icon-cloud cloud-base shadow-cloud-clip"></span>
                            </div>
                        </div>
                        <p className="card-info"></p>
                    </section>
                }
            </div>

        )
    }
}

export default Card