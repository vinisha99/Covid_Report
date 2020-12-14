import React, { Component } from 'react'

export default class stateData extends Component {
    constructor(props){
        super();
        this.state = {
            result:[]
        }
    }

    getData(){

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
        };

        let targetURL = "http://covidtracking.com/api/us";
        fetch(targetURL, requestOptions).then(response => response.json())
                        .then(contents => console.log(contents))
                        .catch(() => console.log("Can’t access response. Blocked by browser?"));
    }

    render() {
        const reports = this.state.result ? this.state.result.map(function(x){
            return <div className="dataset">
                        <div className="title_details">
                            <table>
                                <tr>
                                    <th>Positive</th>
                                    <th>Negative</th>
                                    <th>Recovered</th>
                                </tr>
                                <tr>
                                    <td>{x.positive}</td>
                                    <td>{x.negative}</td>
                                    <td>{x.recovered}</td>
                                </tr>
                            </table>
                        </div>
                    </div>}): "you dont have data";

        return (
                    <div>
                        <h2>REPORTS</h2>
                        <button onClick={this.getData.bind(this)}>Load Data</button>
                        <div className="">{reports}</div>
                    </div>
        )
    }
}
