import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Name's secrets</h1>
      <h6>Navbar: Home, Names list, Add a name, Famouse names </h6>

      <Routes>
        <Route path="/" element={<h4>Home page text</h4>} />  
        <Route path="/names" element={<h4>Names List</h4>} />
        <Route path="/names/:id" element={<h4>Name details</h4>} />
        <Route path="/new" element={<h4>Add a new name</h4>} />
        <Route path="/names/stars" element={<h4>Famous people</h4>} />
        <Route path="/names/stars/new" element={<h4>Add a celebrity</h4>} />
      </Routes>
    </div>
  );
}

export default App;
