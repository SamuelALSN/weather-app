import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Card extends Component {

    render() {
        const { list } = this.props
        return (
            <div className="card-wrapper">
                {Array.isArray(list) ?
                    list.map(item =>
                        <section key={item.objectID} className="card anim-flip">
                            <header>
                                <h1 className="card-header">{item.day}</h1>
                            </header>
                            <p className="card-temp box-highlight">{item.highTemperature}</p>
                            <p className="card-temp box-highlight">{item.lowTemperature}</p>
                            <div className="icon">
                                <div className="cloud-group">
                                    <span className="icon-cloud cloud-circle shadow-cloud-clip"></span>
                                    <span className="icon-cloud cloud-base shadow-cloud-clip"></span>
                                </div>
                            </div>
                            <p className="card-info">{item.observation}</p>
                            <span>
                                <Link to={`/previsions/${item.objectID}`}> Voir </Link>
                            </span>
                        </section>

                    )
                    :
                    <section className="card anim-flip">
                        <header>
                            <h1 className="card-header">NO DATA </h1>
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