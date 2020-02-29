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
                    list.map(item =>
                     new Date(item.dt_txt).getHours() === 15 &&

                        <section key={item.dt} className="card anim-flip">
                            <header>
                                <h1 className="card-header">{this.getDay(item.dt_txt)}</h1>
                            </header>
                            <p className="card-temp box-highlight">{item.main.temp_max}</p>
                            <p className="card-temp box-highlight">{item.main.temp_min}</p>
                            <div className="icon">
                                <div className="cloud-group">
                                    <img src={require(`../images/${item.weather[0].icon}.svg`)} alt="" />
                                </div>
                            </div>
                            <p className="card-info"></p>
                            <span>
                                <Link to={`/previsions/${item.dt}`}> Voir </Link>
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