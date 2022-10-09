import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting = "Bienvenidos al Sitio Web"/>
      </main>
    </>
  );
}

export default App;