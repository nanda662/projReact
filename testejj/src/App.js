import logo from './logo.svg';
import './App.css';
import MenuPrincipal from './Navigation';

function App() {
  return (
    <div className="App">
      <MenuPrincipal />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Loja</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
