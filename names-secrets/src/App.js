import { Routes, Route, Router } from 'react-router-dom';
import './App.css';
import NamesList from "./components/NamesList"
import NamesDetails from "./components/NamesDetails"
import Form from "./components/Form"
import Home from './components/Home';
import Footer from './components/Footer';
import Stars from './components/Stars';
import AddStar from './components/AddStar';
import AllStars from './components/AllStars';
import NameByLetter from './components/NameByLetter';
import Alphabet from './components/Alphabet';
import Search from './components/Search';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <h1 id="title">Name's secrets</h1>
      <Menu />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/names" element={<NamesList />}/>
        <Route path="/names/:id" element={<NamesDetails />} />
        <Route path="/new" element={<Form />} />
        <Route path="/names/stars/:name" element={<Stars />} />
        <Route path="/names/stars" element={<AllStars />} />
        <Route path="/names/stars/new" element={<AddStar />} />
        <Route path="/search" element={<Search />} />
        <Route path="/namesByLetter" element={<Alphabet />} />
        <Route path="/namesByLetter/:letter" element={<NameByLetter />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
