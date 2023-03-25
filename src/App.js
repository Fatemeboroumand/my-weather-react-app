import Weather from './Weather.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather defaultCity="paris"/>
      <footer>
      This project was coded by Fateme Boroumand and is <a href='https://github.com/Fatemeboroumand/my-weather-react-app' target="_blank" rel="noreferrer">open-sourced on GitHub</a> and hosted on <a href='https://master--melodious-moonbeam-d20331.netlify.app/' target="_blank" rel='noreferrer'>Netlify</a>
      </footer>
    </div>
  );
}

export default App;
