import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from './pages/Home';
import './App.css'
import PostPage from './pages/PostPage';
import PostFromPage from './pages/NewPost';

function App() {

  return (
   <Router >
    <div>

    </div>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/posts/:id' element={<PostPage />}/>
      <Route path='/crate' element={<PostFromPage />}/>
      <Route path='/edit/:id' element={<PostFromPage />}/>
    </Routes>
   </Router>
  )
}

export default App
