import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
      </main>
    </div>
  );
}

export default App;
