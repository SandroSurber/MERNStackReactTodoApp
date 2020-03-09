import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class from extends React.Component{

    state = {
        text:"",
    };

    handleChange = e => {
        const newText = e.target.value;
        this.setState({
            text:newText
        });
    };

    handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            this.props.submit(this.state.text);
            this.setState({text:""});
        }
    };

    render(){
        const {text} = this.state;
        return(
            <TextField onChange={this.handleChange} onKeyDown={this.handleKeyDown} label="Task eingeben..." margin="normal" value={text} fullWidth />
        );
    }
}