import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from './pages/Home';
import './App.css'
import PostPage from './pages/PostPage';
import PostFromPage from './pages/NewPost';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/authContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {

  return (
    <AuthProvider>
   <Router >
    <div className='min-h-screen bg-gray-50 text-gray-800'>
<Navbar />
<main className="container mx-auto p-4">

    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/posts/:id' element={<PostPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />}/>

<Route path='/create' element=
{
  <ProtectedRoute>
<PostFromPage />
</ProtectedRoute>
}
/>
<Route path='/edit/:id' element=
{
  <ProtectedRoute>
<PostFromPage />
</ProtectedRoute>
}
/>
    </Routes>
    </main>
        </div>
   </Router>
   </AuthProvider>
  )
}

export default App
