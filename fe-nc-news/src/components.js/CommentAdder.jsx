import React, { Component } from 'react';
import * as api from 'react';

class CommentAdder extends Component {
  state = { 
    body: ""
  }
  render() {
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <input type="text" required placeholder="What do you think?" onChange = {this.handleChange}/>
          </label>
          <button >Post</button>
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({body: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const {article_id} = this.props
    const {body} = this.state

    api.addComment(article_id,'tickle122', body).then(response => console.log(response))
    
  }
}

export default CommentAdder;