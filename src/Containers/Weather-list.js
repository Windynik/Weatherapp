import React, {Component } from 'react'
import { connect } from 'react-redux';
import Chart from '../components/Chart'

class WeatherList extends Component{

    renderWeather(CityData){
        const name=CityData.city.name;
        const temps=CityData.list.map(weather => weather.main.temp)
        const pressures=CityData.list.map(weather => weather.main.pressure)
        const humidities=CityData.list.map(weather => weather.main.humidity)
        

        return(
        <tr key={name}>
            <td >
                {name}
            </td>
            <td><Chart data={temps} color="gold" units='K' /></td>
            <td><Chart data={pressures} color="blue" units='hPa' /></td>
            <td><Chart data={humidities} color="black" units='%' /></td>
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
                    Temperature (K)
                </th>
                
                <th>
                    Pressure (hPa)
                </th>
                
                <th>
                    Humidity (%)
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