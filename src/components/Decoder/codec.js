import React, { Component } from 'react';
import Input from '../Input';

class Codec extends Component {
  constructor(props) {
    super(props);
    this.handleEncodedChange = this.handleEncodedChange.bind(this);
    this.handleDecodedChange = this.handleDecodedChange.bind(this);
    this.state = { value: '', mode: 'decoded' };
  }

  handleDecodedChange(value) {
    this.setState({ value: value, mode: 'decoded' });
  }

  handleEncodedChange(value) {
    this.setState({ value: value, mode: 'encoded' });
  }

  render() {
    const mode = this.state.mode;
    const value = this.state.value;
    const decoded =
      mode === 'decoded' ? value : this.props.encoding.decode(value);
    const encoded =
      mode === 'encoded' ? value : this.props.encoding.encode(value);
    return (
      <div>
        <Input
          mode="encoded"
          value={encoded}
          onValueChange={this.handleEncodedChange}
        />
        <Input
          mode="decoded"
          value={decoded}
          onValueChange={this.handleDecodedChange}
        />
      </div>
    );
  }
}

export default Codec;
