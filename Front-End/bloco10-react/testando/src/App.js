import logo from './logo.svg';
import './App.css';
import Content from './Content'
import Cabeca from './header';

const Task = (value) => {
  return (
    <strong>{value}</strong>
  );
}

function App() {
  return (
    <div className="App">
      <Cabeca />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Content />
        {Task('asa de plebe')}

      </header>
    </div>
  );
}

export default App;
