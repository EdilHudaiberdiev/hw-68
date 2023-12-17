import './App.css';
import {Route, Routes} from 'react-router-dom';
import Toolbar from './Components/Toolbar/Toolbar';
import Home from './Containers/Home/Home';

const App = () => (
  <>
    <header className="bg-dark">
      <Toolbar/>
    </header>

    <main className="container pt-5">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={(<h1>Not found</h1>)}/>
      </Routes>
    </main>

  </>
);

export default App;
