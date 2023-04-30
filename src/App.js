import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {jitsuAnalytics} from '@jitsu/js';

function App() {
  useEffect(() => {
    const analytics = jitsuAnalytics({
      host: process.env.REACT_APP_JITSU_HOST,
      // Browser Write Key configured on Jitsu Site entity.
      // If no Browser Write Key is added for Site entity, Site ID value can be used a Write Key.
      // On Jitsu.Cloud can be omitted if Site has explicitly mapped domain name that is used in host parameter
      writeKey: process.env.REACT_APP_JITSU_WRITE_KEY,
  });

  analytics.track("test page", {pageProperty: "propValue"});

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
