import React from 'react';
import Encodings from './encodings';
import Decoder from './components/Decoder';
import './App.css';

function App() {
  return (
    <div className="App">
      <Decoder encodings={Encodings} />
    </div>
  );
}

export default App;
