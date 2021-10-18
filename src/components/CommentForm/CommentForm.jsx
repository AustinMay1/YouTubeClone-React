import React, { Component } from 'react';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            commentBody:''
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSumbit = (event) =>{
        event.preventDefault();
        this.props.createSong(this.state)
    }


    render() { 
        return ( 
            <React.Fragment>
                <h2>Comments:</h2>
                <form onSubmit={(event) => this.handleSumbit(event)}>
                    <input name='comment' onChange={this.handleChange} value={this.state.commentBody} placeholder='Commenting publicly'/>
                    <button type='submit'>Comment</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default CommentForm;