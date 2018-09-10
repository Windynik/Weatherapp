import React , {Component} from 'react'
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state={term:''};
        this.onInputChange=this.onInputChange.bind(this);   //this is cause the "this" in oninputchange takes in a mystery context. so , we bind the "this" of the program to the function! :D
        this.Onformsubmit=this.Onformsubmit.bind(this);
    }
    onInputChange(event){

        
        this.setState({term:event.target.value});

    }
    Onformsubmit(event){
            event.preventDefault()
            this.props.fetchWeather(this.state.term);
            this.setState({term:''})
    }
    render(){
        return(
            <form onSubmit={this.Onformsubmit} className='input-group'>
            <input placeholder="Get the weather forecast!"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}/>
            <span className='input-group-btn'>
            <button type='submit' className='btn btn-secondary'>Submit!</button>
            </span>
            </form>
        
        )
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar);