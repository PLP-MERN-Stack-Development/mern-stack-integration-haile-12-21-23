import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from './pages/Home';
import './App.css'
import PostPage from './pages/PostPage';
import PostFromPage from './pages/NewPost';
import Navbar from './components/Nav';

function App() {

  return (
   <Router >
    <div className='min-h-screen bg-gray-50 text-gray-800'>
<Navbar />
<main className="container mx-auto p-4">

    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/posts/:id' element={<PostPage />}/>
      <Route path='/create' element={<PostFromPage />}/>
      <Route path='/edit/:id' element={<PostFromPage />}/>
    </Routes>
    </main>
        </div>
   </Router>
  )
}

export default App
