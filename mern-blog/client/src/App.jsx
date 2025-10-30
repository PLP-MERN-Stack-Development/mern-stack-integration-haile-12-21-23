import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from './pages/Home';
import './App.css'

function App() {

  return (
   <Router >
    <div>

    </div>
    <Routes>
      <Route path='/' element={<HomePage />}/>
    </Routes>
   </Router>
  )
}

export default App
