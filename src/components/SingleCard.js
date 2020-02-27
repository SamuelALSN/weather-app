import React, { Component } from 'react';
import data from '../data.json'

class SingleCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: null
        }
        this.searchUniqueCards = this.searchUniqueCards.bind(this)
    }

    searchUniqueCards() {
        let  results;
        for (let i = 0; i < data.length; i++) {
            if (data[i].objectID === parseInt(this.props.match.params.id)) {
                results = data[i]
            }
        }
        return results
    }
    
    UNSAFE_componentWillMount(){
        const myResults = this.searchUniqueCards()
        this.setState({
            result: myResults
        }) 
    }
    // componentDidMount() {
    //  const myResults = this.searchUniqueCards()

    //     this.setState({
    //         result: myResults
    //     })
    //     // console.log(this.state)
    // }
    render() {
        const { result } = this.state
        console.log(result)
        return (
            <div className='card-wrapper'>
                <section key={result.objectID} className="card anim-flip">
                    <header>
                        <h1 className="card-header">{result.day}</h1>
                    </header>
                    <p className="card-temp box-highlight">{result.highTemperature}</p>
                    <p className="card-temp box-highlight">{result.lowTemperature}</p>
                    <div className="icon">
                        <div className="cloud-group">
                            <span className="icon-cloud cloud-circle shadow-cloud-clip"></span>
                            <span className="icon-cloud cloud-base shadow-cloud-clip"></span>
                        </div>
                    </div>
                    <p className="card-info">{result.observation}</p>
                </section>
            </div>
        );
    }
}

export default SingleCard