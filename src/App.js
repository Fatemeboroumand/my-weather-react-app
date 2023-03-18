import Weather from './Weather.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather defaultCity="paris"/>
      <footer>
      This project was coded by Fateme Boroumand and is <a href='https://github.com/Fatemeboroumand/my-weather-react-app'>open-sourced on GitHub</a> and hosted on <a href=''>Netlify</a>
      </footer>
    </div>
  );
}

export default App;
