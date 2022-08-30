import './App.css';
import Dictionary from './Dictionary'

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      </header>
 <main>
<Dictionary defaultKeyword="sunset"/>
 </main>
      <footer>
      <small>
        <a
          href="https://github.com/ZhenkaUA/dictionary_react_app.git"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <span> by Yevheniia Kramar</span>
      </small>
      </footer>
      </div>
    </div>
  );
}

export default App;
