
import './App.css';
import MovieAPI from './components/MovieAPI';
import './components/Styling/formStyle.css';

function App() {
  return (
    <div id="App">
      <header>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" id ="img-header" alt="pic-for-header"></img>
      <hr id="hr1"></hr>
      </header>
      <h1>What do you want to watch?</h1>
      <MovieAPI />
      <hr></hr>
      <footer>
        <p id="footer-text">Copyright 2021</p>
      </footer>
    </div>
  );
}

export default App;
