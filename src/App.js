import './App.css';
// Header部品をインポート
import { Header } from './components/Header';
import {Skills} from './components/Skills';
import {Contact} from './components/Contact';

function App(){
  return(
    <>
    <Header />
    <Skills />
    <Contact />
    </>
  );
}

export default App;
