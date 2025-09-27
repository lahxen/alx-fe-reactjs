import { useState } from 'react'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainContent />
      <Counter />
      <UserProfile name="lahcen" age={31} bio="Loves hiking and photography" />
      <Footer />
    </>
  )
}

export default App
