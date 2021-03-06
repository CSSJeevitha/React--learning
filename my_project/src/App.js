import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap'
import Menu from './components/MenuComponents'

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href=""> Home </NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
