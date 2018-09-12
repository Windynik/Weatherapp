import React, {Component } from 'react'
import { connect } from 'react-redux';

class WeatherList extends Component{

    renderWeather(CityData){
        const name=CityData.city.name;
        const temp=CityData.list.map(weather => weather.main.temp)
        console.log(temp)

        return(
        <tr key={name}>
            <td >
                {name}
            </td>
        </tr>
        );
    }
    render(){
        return(
            <table className='table table-hover'>
            <thead>
            <tr>
                <th>
                    City
                </th>
                
                <th>
                    Temperature
                </th>
                
                <th>
                    Pressure
                </th>
                
                <th>
                    Humidity
                </th>
            </tr>
            </thead>
            <tbody>
                {this.props.weather.map(this.renderWeather)}
            </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){
    return {
        weather // {weather} is the same as {weather:weather} from the state.  this is ES6 syntax
    };
}

export default connect(mapStateToProps)(WeatherList);