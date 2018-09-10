import React , {Component} from 'react'

export default class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state={term:''};
        this.onInputChange=this.onInputChange.bind(this);   //this is cause the "this" in oninputchange takes in a mystery context. so , we bind the "this" of the program to the function! :D
    }
    onInputChange(event){

        
        this.setState({term:event.target.value});

    }
    Onformsubmit(event){
            event.preventDefault()
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