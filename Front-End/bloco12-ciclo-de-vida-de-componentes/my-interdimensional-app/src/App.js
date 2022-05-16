import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    characters: [],
  }

  async componentDidMount() {
    const returnAPI = await fetch('https://rickandmortyapi.com/api/character');
    const returnAPIjson = await returnAPI.json();
    this.setState({ characters: returnAPIjson.results });
  }

  render() {
    const { characters } = this.state;

    return (
    <div>  
      { characters.map((char) => (
        <div key={char.name}>
          <div>{ char.name }</div>
          <img src={char.image } alt='boneco' />
        </div> 
      ))}
    </div>
    )
  }
}
export default App;
