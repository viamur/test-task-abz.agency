import './App.scss';
import Card from './Card/Card';
import Header from './Header/Header';
import Preloader from './Preloader/Preloader';
import RadioButton from './RadioButton/RadioButton';

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Preloader />
    </div>
  );
}

export default App;
