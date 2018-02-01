import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onValueChange(e.target.value);
  }

  render() {
    const { value, mode } = this.props;

    return (
      <div className="Input">
        <label style={{ display: 'block', marginBottom: '0.5em' }}>
          Enter {mode} string:
        </label>
        <textarea
          value={value}
          rows="8"
          cols="48"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Input;
