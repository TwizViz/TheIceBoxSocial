import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import DiscoveryPage from './pages/DiscoveryPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import GamesPage from './pages/GamesPage';
import AboutUsPage from './pages/AboutUsPage';
import SupportPage from './pages/SupportPage';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path='/' exact element={<Discovery />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/profile' element={<Account />} />
          <Route path='/games'  element={<Play />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/support' element={<Support />} />
        </Routes>
    </div>
  );
}

function Discovery(){
  return(
    <div className='discovery-page'>
      <DiscoveryPage />
    </div>
  )
}

function Home(){
  return(
    <div className='home-page'>
      <HomePage />
    </div>
  )
}

function SignIn(){
  return(
    <div className='login-page'>
      <LoginPage />
    </div>
  )
}
function SignUp(){
  return(
    <div className='register-page'>
      <RegisterPage />
    </div>
  )
}

function Account(){
  return(
    <div className='profile-page'>
      <ProfilePage />
    </div>
  )
}

function Play(){
  return(
    <div className='games-page'>
      <GamesPage />
    </div>
  )
}

function About(){
  return(
    <div className='about-page'>
      <AboutUsPage />
    </div>
  )
}

function Support(){
  return(
    <div className='support-page'>
      <SupportPage />
    </div>
  )
}

export default App;
