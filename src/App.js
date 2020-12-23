import logo from './logo.svg';
import './App.css';
import LoginForm from './containers/loginForm/loginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header center">
        <h1>react-trivial-form</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <LoginForm />
      </main>
    </div>
  );
}

export default App;
