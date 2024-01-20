import About from './About';
import './App.css';
import Carsoule from './Carsoule';
import Contact from './Contact';
import Header from './Header';
import Product from './Product';

function App() {
  return (
    
    <div className="App">
      
      <Header/>
      <br></br>
      <Carsoule/>
      <hr id='about' href></hr>
      <About/>
      <hr id='product' href></hr>
      <Product/>
      <hr id='contact' href></hr>
      <Contact/>
     
    </div>
    
    
  );
}

export default App;
