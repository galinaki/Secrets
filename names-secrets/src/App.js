import { Routes, Route } from 'react-router-dom';
import NamesList from "./components/NamesList"
import NamesDetails from "./components/NamesDetails"
import Form from "./components/Form"
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Stars from './components/Stars';

function App() {
  return (
    <div className="App">
      <h1>Name's secrets</h1>
      <Navbar />
      <br />
      <br />
      <br/>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/names" element={<NamesList />} />
        <Route path="/names/:id" element={<NamesDetails />} />
        <Route path="/new" element={<Form />} />
        <Route path="/names/:id/stars" element={<Stars />} />
        <Route path="/names/stars/new" element={<h4>Add a celebrity</h4>} />
      </Routes>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
