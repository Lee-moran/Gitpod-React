import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greetings="Nice to meet you " name="mike" age="32" />
    </div>
  );
}

export default App;
