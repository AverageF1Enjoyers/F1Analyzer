import logo from './logo.svg';
import './App.css';

function App() {
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

        </a>
        
        <label htmlFor="race">Choose something a race :</label>
        <select id="race" name="race">
          <option value="bahrain">Bahrain</option>
          <option value="jeddah">Saudi Arabia</option>
          <option value="australia">Austalia</option>
          <option value="imola">Imola</option>
          <option value="miami">Miami</option>
          <option value="spain">Spain</option>
          <option value="monaco">Monaco</option>
          <option value="baku">Baku</option>
          <option value="canada">Canada</option>
          <option value="gbr">Great Britain</option>
          <option value="austria">Austria</option>
          <option value="france">France</option>
          <option value="hungary">Hungary</option>
          <option value="belgium">Belgium</option>
          <option value="netherlands">Netherlands</option>
          <option value="monza">Monza</option>
          <option value="singapore">Singapore</option>
          <option value="japan">Japan</option>
          <option value="usa">USA</option>
          <option value="mexico">Mexico</option>
          <option value="brazil">Brazil</option>
          <option value="abudhabi">Abu Dhabi</option>
        </select>

        <label htmlFor="comparison">Choose something to compare :</label>
        <select id="comparison" name="comparison">
          <option value="qualioverview">Qualifying Overview</option>
          <option value="onelap">One Lap</option>
          <option value="stints">Race Stints</option>
          <option value="gaps">Race Gaps</option>

        </select>

        <label htmlFor="drivers">Choose the first driver:</label>
        <select id="driver1" name="driver1">
          <option value="ham">Hamilton</option>
          <option value="rus">Russell</option>
          <option value="ver">Verstappen</option>
          <option value="per">Pérez</option>
          <option value="lec">Leclerc</option>
          <option value="sai">Sainz</option>
          <option value="nor">Norris</option>
          <option value="ric">Ricciardo</option>
          <option value="oco">Ocon</option>
          <option value="alo">Alonso</option>
          <option value="gas">Gasly</option>
          <option value="tsu">Tsunoda</option>
          <option value="vet">Vettel</option>
          <option value="str">Stroll</option>
          <option value="alb">Albon</option>
          <option value="lat">Latifi</option>
          <option value="bot">Bottas</option>
          <option value="zho">Zhou</option>
          <option value="msc">Schumacher</option>
          <option value="mag">Magnussen</option>
        </select>
        
        <label htmlFor="drivers">Choose the second driver:</label>
        <select id="driver2" name="driver2">
          <option value="ham">Hamilton</option>
          <option value="rus">Russell</option>
          <option value="ver">Verstappen</option>
          <option value="per">Pérez</option>
          <option value="lec">Leclerc</option>
          <option value="sai">Sainz</option>
          <option value="nor">Norris</option>
          <option value="ric">Ricciardo</option>
          <option value="oco">Ocon</option>
          <option value="alo">Alonso</option>
          <option value="gas">Gasly</option>
          <option value="tsu">Tsunoda</option>
          <option value="vet">Vettel</option>
          <option value="str">Stroll</option>
          <option value="alb">Albon</option>
          <option value="lat">Latifi</option>
          <option value="bot">Bottas</option>
          <option value="zho">Zhou</option>
          <option value="msc">Schumacher</option>
          <option value="mag">Magnussen</option>
        </select>

      </header>
    </div>
  );
}

export default App;
