import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from './components/MyNavbar';
import MyAlert from './components/MyAlert';
import MyButton from './components/MyButton';
import MyCard from './components/MyCard';
import MyCarousel from './components/MyCarousel';
import MyModal from './components/MyModal';
import MyLogin from './components/MyLogin';
import MyCadastro from './components/MyCadastro';


function App() {
  return (
    <div className="App">
    <MyNavbar />
    <MyCadastro />
    {/*<MyLogin />
    <MyAlert />
    <MyButton />
    <br />
    <MyCard />
    <br />
    <MyCarousel />
    <MyModal />*/}
    </div>
  );
}

export default App;
