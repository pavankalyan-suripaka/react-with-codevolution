import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }


    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    commentsHandler = event => {
        this.setState({
            comments: event.target.value
        })
    }

    topicHandler = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    submitHandler = (event) => {
        console.log(this.state)
        event.preventDefault();
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Username</label>
                        <input type="text" value={this.state.username} onChange={this.usernameHandler} />
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea type="text" value={this.state.comments} onChange={this.commentsHandler} />
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={this.state.topic} onChange={this.topicHandler}>
                            <option value="react">react</option>
                            <option value="nodejs">nodejs</option>
                            <option value="html">html</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
