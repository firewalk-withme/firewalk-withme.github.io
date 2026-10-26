import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Triptich from './components/pages/Triptich';
import Touch from './components/pages/Touch';
import Dust from './components/Dust'
import Journals from './components/pages/Journals';

function App() {
  return (
    <>
      <Dust />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/triptich' element={<Triptich />} />
        <Route path='/Journals' element={<Journals />} />
        <Route path='/touch' element={<Touch />} />
      </Routes>
    </>
  );
}
export default App;
