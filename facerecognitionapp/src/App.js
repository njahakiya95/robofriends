import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';  
import Navigation from './components/Navigation/Navigation'; 
import Logo from './components/Logo/Logo'; 
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css'; 

const app = new Clarifai.App({
  apiKey: 'b54a0fc683434fa7a325e4b8de5775a8', 
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict({id:'MODEL_ID', version:'MODEL_VERSION_ID'}, "https://samples.clarifai.com/metro-north.jpg").then(
      function(response) {
    // do something with response
      },
      function(err) {
    // there was an error
  }
);

  }

  render() {
    return (
      <div className="App">
          <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      </div>
    );
  }
}

export default App; 