import './App.css';
import Form from './components/Form';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Lane</h1>
        <Form />
        <Gallery />
      </header>
    </div>
  );
}

export default App;
