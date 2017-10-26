import React, { Component } from 'react';
import Encodings from './encodings';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.state = {encoding: Encodings[0]}
  }

  handleLinkClick(encoding) {
    this.setState({encoding: encoding});
  }

  render() {
    return (
      <div className="App">
        <h2>
          {
            Encodings.map( encoding => (
              <ActionLink active={encoding.name === this.state.encoding.name} 
                onClick={this.handleLinkClick} encoding={encoding} key={encoding.name}/>
            ))
          }
        </h2>
        <Codec encoding={this.state.encoding}/>
      </div>
    );
  }
}

function ActionLink(props) {
  function handleClick(e) {
    e.preventDefault();
    props.onClick(props.encoding);
  }

  return (
    <a href="#" className={props.active ? "active":""} onClick={handleClick}>
      {props.encoding.name}
    </a>
  );
}

class Codec extends Component {
  constructor(props){
    super(props);
    this.handleEncodedChange = this.handleEncodedChange.bind(this);
    this.handleDecodedChange = this.handleDecodedChange.bind(this);
    this.state = {value: '', mode: 'decoded'};
  }

  handleDecodedChange(value) {
    this.setState({value: value, mode: 'decoded'});
  }

  handleEncodedChange(value) {
    this.setState({value: value, mode: 'encoded'});
  }

  render() {
    const mode = this.state.mode;
    const value = this.state.value;
    const decoded = mode === 'decoded' ? value : this.props.encoding.decode(value);
    const encoded = mode === 'encoded' ? value : this.props.encoding.encode(value);
    return (
      <div>
        <Input mode="encoded" value={encoded}
          onValueChange={this.handleEncodedChange} />
        <Input mode="decoded" value={decoded}
          onValueChange={this.handleDecodedChange} />
      </div>
    )
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onValueChange(e.target.value);
  }

  render() {
    const value = this.props.value;
    const mode = this.props.mode;
    return (
      <div className="Input">
        <label style={{display: "block", marginBottom: "0.5em"}}>Enter {mode} string:</label>
        <textarea value={value} rows="8" cols="48"
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
