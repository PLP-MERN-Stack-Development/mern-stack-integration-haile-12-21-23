import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from './pages/Home';
import './App.css'
import PostPage from './pages/PostPage';

function App() {

  return (
   <Router >
    <div>

    </div>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/posts/:id' element={<PostPage />}/>
    </Routes>
   </Router>
  )
}

export default App
