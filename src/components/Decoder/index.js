import React, { Component } from 'react';
import Codec from './codec';
import ActionLink from '../ActionLink';

class Decoder extends Component {
  constructor(props) {
    super(props);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.state = { encoding: props.encodings[0] };
  }

  handleLinkClick(encoding) {
    this.setState({ encoding });
  }

  render() {
    return (
      <div>
        <h2>
          {this.props.encodings.map(encoding => (
            <ActionLink
              active={encoding.name === this.state.encoding.name}
              onClick={this.handleLinkClick}
              payload={encoding}
              label={encoding.name}
              key={encoding.name}
            />
          ))}
        </h2>
        <Codec encoding={this.state.encoding} />
      </div>
    );
  }
}

export default Decoder;
